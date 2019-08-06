import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

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
}
