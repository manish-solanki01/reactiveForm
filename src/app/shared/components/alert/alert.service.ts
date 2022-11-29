import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AlertService {

  public alert$ = new Subject();

  constructor() {}

  alert(alert:any): any {
    this.alert$.next(alert);
  }

}
