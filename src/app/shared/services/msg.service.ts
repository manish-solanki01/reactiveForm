import { Injectable } from "@angular/core";
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})

export class MsgService {

  constructor( private toastr: ToastrService ) { }

  errorHandle (err:any) {

    if ( err.status !== 500 ) {

      if (err.error.summary) {
        this.error(err.error.summary, err.error.detail);
      } else if (err.error.vError) {
        this.error(err.error.vError, '');
      } else {
        this.error(err.statusText, '');
      }

    } else {

      this.error('Error', 'Something went wrong!');

    }

  }

  success(summary: any, detail: any) {
    this.toastr.success(summary, detail);
  }

  warning(summary: any, detail: any) {
    this.toastr.warning(summary, detail);
  }

  error(summary: any, detail: any) {
    this.toastr.error(summary, detail);
  }
  
}
