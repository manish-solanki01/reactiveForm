import { AbstractControl, ValidatorFn } from "@angular/forms";

export function nameValidator(regx: RegExp): ValidatorFn {

  return (control: AbstractControl): {[key: string]: boolean} | null => {

    // Without regx

    if (control.value.trim() == "manish") {

      return {'nameNotAllowed': true};

    }

    // With regx

    const notAllowed = regx.test(control.value);

    return notAllowed ? {'nameNotAllowed': true} : null;

  }

}

export function mustMatch(source: string, target: string): ValidatorFn {

  return (controls: AbstractControl) => {

    const sourceCtrl = controls.get(source);
    const targetCtrl = controls.get(target);

    if (targetCtrl?.errors && !targetCtrl.errors['mismatch']) {
      return null;
    }

    if (sourceCtrl?.value !== targetCtrl?.value) {
      controls.get(target)?.setErrors({ mismatch: true });
      return { mismatch: true };
    } else {
      return null;
    }
    
  };

}