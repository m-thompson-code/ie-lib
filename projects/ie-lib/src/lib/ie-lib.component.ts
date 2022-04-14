import { Component } from '@angular/core';
import { IeLibService } from './ie-lib.service';

@Component({
  selector: 'lib-ie-lib',
  template: `
    <p>
      ie-lib works!
    </p>
    <p *ngIf="date">
      Date: {{ date | date }}
    </p>
  `,
  styles: [
  ]
})
export class IeLibComponent {
  date?: Date;
  
  constructor(private readonly service: IeLibService) {
    this.service.promiseTest().then(date => {this.date = date; console.log(date)});
  }
}
