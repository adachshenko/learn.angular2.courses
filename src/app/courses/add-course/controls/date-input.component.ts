import { Component, forwardRef, OnChanges } from '@angular/core';
import {
    ControlValueAccessor,
    NG_VALUE_ACCESSOR,
    FormControl
} from '@angular/forms';

@Component({
    selector: 'date-input',
    template: `<input type="text" [ngModel]="visibleValue | date:'dd/MM/yyyy'" 
    (ngModelChange)="change($event)">`,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DateInputComponent),
            multi: true
        }
    ]
})
export class DateInputComponent implements ControlValueAccessor {
    public visibleValue: Date;
    private _value: Date;
    private pattern: RegExp = new RegExp(/^(0[1-9]|[12][0-9]|3[01])[\/](0[1-9]|1[012])[\/]\d{4}$/);

    get value() {
        return this._value;
    }

    set value(val) {
        this._value = val;
        this.propagateChange(val);
    }

    public change(newValue: string) {
        if (this.pattern.test(newValue)) {
            const newDateParts = newValue.split('/');
            this.value = new Date(+newDateParts[2], +newDateParts[1] - 1, +newDateParts[0]);
            this.visibleValue = this.value;
        } else {
            this.value = null;
        }
    }

    // tslint:disable-next-line:no-empty
    public propagateChange = (_: any) => { };

    public writeValue(value: Date) {
        this.value = value;
        this.visibleValue = value;
    }

    public registerOnChange(fn) {
        this.propagateChange = fn;
    }

    // tslint:disable-next-line:no-empty
    public registerOnTouched() {}
}
