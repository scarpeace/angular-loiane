import { FormArray, FormControl, FormGroup } from '@angular/forms';

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

      return cep ? null : {cepInvalido: true}
    }
    return null;
  }

  static equalsTo(otherField: string){
    const validator = (formControl : FormControl) =>{
      if(otherField == null){
        throw new Error('É necessário informar um campo')
      }

      if(!formControl.root || !(<FormGroup>formControl.root).controls){
        return null
      }
      const field = (<FormGroup>formControl.root).get(otherField)

      if(!field){
        throw new Error('É necessário informar um campo válido')
      }

      if(field.value !== formControl.value){
        // TO-DO voltar aqui pra testar com true 
        return {equalsTo : otherField}
      }
      
      // Pra dizer que o campo está válido
      return null;
     }
    return validator;
  }

  static getErrorMsg(fieldName : string, validatorName: string, validatorValue?:any){
    const config = {
      'required':`${fieldName} é obrigatório`,
      'minlength': `${fieldName} precisa ter no mínimo ${validatorValue.requiredLength} caracteres  `, 
      'maxlength': `${fieldName} precisa ter no máximo ${validatorValue.requiredLength} caracteres  `,
      'cepInvalido': 'Cep inválido.',
      'emailInvalido': 'Email já cadastrado!',
      'equalsTo': "Campos não são iguais",
      'pattern': "Campo inválido"

    }
    return config[validatorName]
  }
}