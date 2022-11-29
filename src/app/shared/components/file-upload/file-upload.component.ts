import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AlertService } from '../alert/alert.service';

@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})

export class fileUploadComponent implements OnInit, OnChanges {

  private apiUrl = environment.baseUrl;

  imgSelected = false;
  imageSrc = '../../../assets/images/upload.png';

  @Input() imageUrl: any;
  @Output() changeUrl = new EventEmitter<any>();

  file: any;

  constructor( 
    protected http: HttpClient, 
    public alertService: AlertService
  ) {}

  ngOnInit(): void {}

  ngOnChanges(): void {

    this.checkToLoad();

  }

  checkToLoad () {
    if( this.imageUrl ) {
      this.imageSrc = this.imageUrl;
    }
  }

  onFileChange(event: any): void {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      if (event.target.files[0].size < 2000000) {
        const [file] = event.target.files;
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.imageSrc = reader.result as string;
          this.imgSelected = true;
          this.file = event.target.files[0];
        };
      } else {
        this.alertService.alert({type: 'danger', message: 'image should be less than 2mb!'});
      }
    }
  }

  onSubmit(): void {
    const formData = new FormData();
    formData.append("file", this.file, this.file.name);

    this.http.post<any>(`${this.apiUrl}/uploadFile`, formData).subscribe(res => {
      this.imageSrc = this.apiUrl+'/'+res.file;
      this.changeUrl.next(this.apiUrl+'/'+res.file);
      this.alertService.alert({type: 'success', message: 'Image uploaded successfully..'});
      this.imgSelected = false;
    });
  }

  onCancel(): void {
    this.imageSrc = '../../../assets/images/upload.png';
    this.changeUrl.next('');
    this.imgSelected = false;
  }

}
