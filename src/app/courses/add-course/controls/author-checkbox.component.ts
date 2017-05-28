import { Component, Input, forwardRef, OnInit } from '@angular/core';
import {
  FormControl,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS
} from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { CourseService } from '../../shared';

@Component({
  selector: 'author-checkbox',
  template: `
    <div class="scrollbox" >
    <span *ngFor="let author of authors">
    <input type="checkbox" 
    (change)="setValue($event)"
    [value]="author">
    {{author}}<br />
    </span>
    </div>
  `,
  styles: [`
  .scrollbox {
   border:2px solid #ccc; 
   width:180px; 
   height: 100px; 
   overflow-y: scroll; 
}`],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AuthorCheckboxComponent),
      multi: true
    }
  ]
})
export class AuthorCheckboxComponent implements ControlValueAccessor {

  @Input() public authors: string[];
  @Input() public nameOption: string;

  selectedValues: string[];
  isDisabled: boolean;

   public onChange: any = () => {};
   public onTouched: any = () => {};

  setValue(item){
    this.value = item.target.value;
  }

  set value(newValue){
    if (newValue) {
      this.selectedValues = newValue;
      this.onChange(newValue);
    }
  }

  get value() {
    return this.selectedValues;
  }

  writeValue(value: any) {
    this.selectedValues.push(value);
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

   public registerOnTouched(fn) {
    this.onTouched = fn;
  }

}