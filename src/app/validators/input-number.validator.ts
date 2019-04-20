import { AbstractControl } from '@angular/forms';

export function InputNumberValidator(control: AbstractControl) {
  if (control.value < 10000) {
    return { minlength: true };
  } else if (control.value > 100000) {
    return { maxlength: true };
  }
  return null;
}