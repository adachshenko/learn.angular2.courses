import { FormControl } from '@angular/forms';

export function validateDate(c: FormControl) {
    return Object.prototype.toString.call(c.value) ===
        '[object Date]' ? null : { invalidDateFormat: true };
}
