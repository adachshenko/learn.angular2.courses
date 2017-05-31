import { Component, Input, forwardRef, OnInit } from '@angular/core';
import {
  FormControl,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS
} from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { CourseService } from '../../shared';

export function validateAuthors(fc: FormControl) {
    return fc.value.length > 0 ? null : { isEmpty: true };
}

@Component({
  selector: 'author-checkbox',
  template: `
    <div class="scrollbox" >
      <span *ngFor="let author of authors">
        <input type="checkbox"
          (change)="toggleAuthor($event, author)"
          [checked]="getAuthorState(author.id)"
        >
        {{author.firstName}} {{author.lastName}}<br />
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
 ,
        {
            provide: NG_VALIDATORS,
            useValue: validateAuthors,
            multi: true
        }
        ]
})
export class AuthorCheckboxComponent implements ControlValueAccessor {

  @Input() public authors: any[];
  @Input() public nameOption: string;

  public selectedAuthors: any[];

  // tslint:disable-next-line:no-empty
  public onChange: any = () => {};
  // tslint:disable-next-line:no-empty
  public onTouched: any = () => {};

  set value(newValue){
    if (newValue) {
      this.selectedAuthors = newValue;
      this.onChange(newValue);
    }
  }

  get value() {
    return this.selectedAuthors;
  }

  public getAuthorState(authorId) {
    return !!this.selectedAuthors.find((author) => author.id === authorId);
  }

  public toggleAuthor(event, author) {
    if (event.target.checked) {
      this.value = this.value.concat(author);
    } else {
      this.value = this.selectedAuthors.filter((_author) => _author.id !== author.id);
    }
  }

  public writeValue(value: any) {
    if (value) {
      this.value = value;
    }
  }

  public registerOnChange(fn) {
    this.onChange = fn;
  }

  public registerOnTouched(fn) {
    this.onTouched = fn;
  }
}
