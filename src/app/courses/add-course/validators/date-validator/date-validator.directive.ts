import { Directive } from '@angular/core';
import { NG_VALIDATORS, FormControl, Validator } from '@angular/forms';
import { validateDate } from './date-validator';

@Directive({
    selector: '[validateDate][ngModel]',
    providers: [
        {
            provide: NG_VALIDATORS, useExisting: DateValidator, multi: true
        }
    ]
})
export class DateValidator implements Validator {
    public validate(c: FormControl) {
        return validateDate(c);
    }
}
