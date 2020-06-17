import {FormGroup} from '@angular/forms';

export function validateSameValue(fg: FormGroup) {
  const controlValues = [];
  let isTheSame = true;

  for (const controlsKey in fg.controls) {
    if (this.formErrors.hasOwnProperty(controlsKey)) {
      controlValues.push(fg.get(controlsKey).value);
    }
  }

  if (controlValues) {
    isTheSame = controlValues.every(controlValue => {
      return controlValue === controlValues[0];
    });
  }

  return isTheSame ? null : {
    validSameValues: {
      valid: false
    }
  };
}
