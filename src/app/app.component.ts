import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';

export interface Status {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  statuses: Status[] = [
    {
      value: 'storeShipped',
      viewValue: 'Store Shipped'
    },
    {
      value: 'estimateAwaitingApproval',
      viewValue: 'Estimate Awaiting Approval'
    },
    {
      value: 'received',
      viewValue: 'Received'
    },
    {
      value: 'completed',
      viewValue: 'Completed'
    },
    {
      value: 'working',
      viewValue: 'Working'
    },
    {
      value: 'estimateApproved',
      viewValue: 'Estimate approved'
    },
    {
      value: 'awaitingParts',
      viewValue: 'Awaiting Parts'
    },
    {
      value: 'estimateRejected',
      viewValue: 'Estimate rejected'
    }
  ];
  items: string[] = [
    'storeShipped',
    'working',
    'estimateApproved',
  ];

  public disbleOption(option: string): boolean {
    return false;
  }

  public getAvailableStatuses$(status: string): Observable<Status[]> {
    let statusArray: Status[] = [];

    switch(status) {
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
    }

    return of(statusArray);
  }

  public getAvailableStatuses(status: string): Status[] {
    let statusArray: Status[] = [];

    switch(status) {
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
        console.log('storeShipped', statusArray);
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

      default: console.log(status);
    }
     
    return this.statuses;
  }
}
