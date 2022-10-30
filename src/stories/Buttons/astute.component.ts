import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'storybook-button',
    template: ` <button
      type="button"
      [ngClass]="class"
      [ngStyle]="{ 'background-color': backgroundColor }"
    >
      {{ label }}
    </button>`,
    styleUrls: ['./astute.css'],
  })
  export default class AstuteSample {
   
    /**
     * What background color to use
     */
    @Input()
    backgroundColor?: string;
  
    /**
     * How large should the button be?
     */
    @Input()
    size: 'small' | 'medium' | 'large' = 'medium';
  
    /**
     * Button contents
     *
     * @required
     */
    @Input()
    label = 'Button';

    primary: any;
  
  
  
    public get classes(): string[] {
      const mode = this.primary ? 'small' : 'medium';
  
      return ['large', `${this.size}`, mode];
    }
  }
  