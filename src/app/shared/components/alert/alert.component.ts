import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlertService } from './alert.service';

interface Alert {
  type: string;
  message: string;
}

@Component({
  selector: 'app-alert',
  template: `
    <div *ngFor="let alert of alerts">
      <ngb-alert [type]="alert.type" (closed)="close(alert)">{{ alert.message }}</ngb-alert>
    </div>
  `,
})

export class AlertComponent implements OnInit, OnDestroy {
  
  alerts: Alert[] = [];

  constructor( public alertService: AlertService ) {}

  ngOnInit(): void {
    this.alertService.alert$.subscribe((alert:any) => 
    {
      this.alerts.push(alert);
    });
  }

  ngOnDestroy(): void {
    this.alerts = [];
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

}
