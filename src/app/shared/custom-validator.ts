import { FormControl, ValidatorFn } from '@angular/forms';
import { AbstractControl } from '@angular/forms/src/model';

export class CustomValidator {
    static startsWithNumber(): ValidatorFn {
        return (control: AbstractControl): {[key: string]: any} => {
            const valid = /^\d/.test(control.value);
            if (valid && control.value !== '' && !isNaN(control.value.charAt(0))) {
                return { 'startsWithNumber': true };
            }
            return null;
        };
    }
}
