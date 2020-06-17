import {FormControl} from '@angular/forms';

export function validateCapitalLetter(c: FormControl) {
  const EMAIL_REGEXP = /[A-Z]/;

  return EMAIL_REGEXP.test(c.value) ? null : {
    validateCapitalLetter: {
      valid: false
    }
  };
}
