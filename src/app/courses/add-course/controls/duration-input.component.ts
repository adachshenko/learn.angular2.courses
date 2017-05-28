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
    selector: 'duration-input',
    template: `
    <input type="number"
    (change)="setValue($event)"
    [value]="duration"><span>{{duration  | myDurationFormatter}}</span>
  `,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DurationInputComponent),
            multi: true
        }
    ]
})
export class DurationInputComponent implements ControlValueAccessor {

    @Input() public duration: string = '';

    public onChange: any = () => {};
    public onTouched: any = () => {};

    public setValue(value) {
        this.value = value.target.value;
    }

    get value() {
        return this.duration;
    }

    set value(val) {
        this.duration = val;
        this.onChange(val);
        this.onTouched();
    }

    public registerOnChange(fn) {
        this.onChange = fn;
    }

    public registerOnTouched(fn) {
        this.onTouched = fn;
    }

    public writeValue(value) {
        if (value) {
            this.value = value;
        }
    }
}
