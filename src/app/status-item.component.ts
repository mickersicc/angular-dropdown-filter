import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Status } from './app.component';

@Component({
  selector: 'status-item',
  template: `
    <mat-form-field>
      <mat-label>Choose an option</mat-label>
      <mat-select [(ngModel)]="item">
        <mat-option [value]="status.value" *ngFor="let status of statusList$ | async" [disabled]="disbleOption(status.value)">{{ status.viewValue }}</mat-option>
      </mat-select>
    </mat-form-field>
  `,
  styles: [``]
})
export class StatusItemComponent implements OnInit {
  @Input() statuses: Status[];
  @Input() item: string;
  statusList$: Observable<Status[]>;
  
  ngOnInit() {
    this.getAvailableStatuses();
  }

  public disbleOption(option: string): boolean {
    return false;
  }

  public getAvailableStatuses(): void {
    let statusArray: Status[] = [];
    
    switch(this.item) {
      case 'storeShipped':
        statusArray = [
          {
            value: 'storeShipped',
            viewValue: 'Store Shipped'
          },
          {
            value: 'received',
            viewValue: 'Received'
          }
        ]
        break;
      case 'working':
        statusArray = [
          {
            value: 'working',
            viewValue: 'Working'
          },
          {
            value: 'shippedCompleted',
            viewValue: 'Shipped Completed'
          },
          {
            value: 'shippedUnrepaired',
            viewValue: 'Shipped Unrepaired'
          }
        ]
        break;
      case 'estimateApproved':
        statusArray = [
          {
            value: 'estimateApproved',
            viewValue: 'Estimate approved'
          },
          {
            value: 'working',
            viewValue: 'Working'
          },
          {
            value: 'awaitingParts',
            viewValue: 'Awaiting Parts'
          }
        ]
        break;
      case 'estimateRejected':
        statusArray = [
          {
            value: 'estimateRejected',
            viewValue: 'Estimate rejected'
          },
          {
            value: 'working',
            viewValue: 'Working'
          },
          {
            value: 'awaitingParts',
            viewValue: 'Awaiting Parts'
          }
        ]
        break;
      default: 
        statusArray = this.statuses;
        break;
    }
     
    this.statusList$ = of(statusArray);
  }
}
