import {FormControl} from '@angular/forms';

export function validateNumber(c: FormControl) {
  const EMAIL_REGEXP = /\d/;

  return EMAIL_REGEXP.test(c.value) ? null : {
    validateNumber: {
      valid: false
    }
  };
}
