import { FormArray, FormControl } from '@angular/forms';

export class FormValidation{

  static requiredMinCheckbox (min = 1){
    const validator = (formArray: FormArray) => {

      // const arrayDeControls = formArray.controls;
      // let totalChecked = 0;
      // for (let i = 0; i < arrayDeControls.length; i++) {
      //   if(arrayDeControls[i].value){
      //     totalChecked++
      //   }
      // }

      const arrayDeControls = formArray.controls;
      let totalChecked = 0;

      arrayDeControls.map(v => v.value)
      .reduce((total, current) => current ? total + current : total, totalChecked ) 

      return totalChecked >= min ? null : {required: true}
    }

    return validator;
  }

  static cepValidator(control: FormControl){

    const cep = control.value;
    if(cep && cep !== ''){
      const validacep = /^[0-9]{8}$/;

      return validacep.test(cep) ? null : {cepInvalido: true}
    }
    return null;
  }
}