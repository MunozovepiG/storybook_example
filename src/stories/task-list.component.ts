import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sample-button',
  template: ` <h1
  class="class"
  [ngStyle]="{ 'background-color': backgroundColor }"
  >
   {{heading}}
    <h1>`,
  styleUrls: ['./tasks.css'],
})
export default class ButtonComponent {

  @Input()
  backgroundColor?: string;


  @Input()
  heading = 'this is the heading text';

 
}
