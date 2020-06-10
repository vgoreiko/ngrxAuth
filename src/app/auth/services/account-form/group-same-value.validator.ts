import {FormGroup} from "@angular/forms";

export function validateSameValue(fg: FormGroup) {
  let controlValues = []
  let isTheSame = true

  for (let controlsKey in fg.controls) {
    controlValues.push(fg.get(controlsKey).value)
  }

  if(controlValues) {
    isTheSame = controlValues.every(controlValue => {
      return controlValue === controlValues[0]
    })
  }

  return isTheSame ? null : {
    validSameValues: {
      valid: false
    }
  };
}
