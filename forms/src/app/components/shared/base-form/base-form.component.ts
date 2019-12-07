import { Component, OnInit } from '@angular/core';
import {FormGroup, FormArray} from "@angular/forms"

@Component({
  selector: 'app-base-form',
  template: '</div></div>',
})
export abstract class BaseFormComponent implements OnInit {

  formulario: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  abstract submit();

  onSubmit(){
    if(this.formulario.valid){
      this.submit
    }else{
      console.log('Formulário Inválido')
    }
  }

  //Isso aqui tem um artigo no BLOG DA LOIANE (Aula 98 ou 99)
  //Angular Reactive Forms Trigger Validation on Submit 
  verificarValidacoesForm(formGroup: FormGroup | FormArray) {
    Object.keys(formGroup.controls).forEach(campo => {
      const controle = formGroup.get(campo);
      controle.markAsTouched();

      if (controle instanceof FormGroup || controle instanceof FormArray) {
        this.verificarValidacoesForm(controle)
      }
    })
  }

  resetarFormulario(){
    this.formulario.reset();
  }

   verificaValidTouched(campo) {
    //RECEBE O NOME DO CAMPO
    const input = this.formulario.get(campo);

    //O get do formulario já retorna as informações baseado no nome do campo do formulário
    return input.value === null && (input.touched || input.dirty)
  }

  verificaEmailValido(campo) {
    if (this.formulario.get(campo).errors) {
      return this.formulario.get(campo).errors.email;
    }
  }

  //Ainda não implementei
  verificaRequired(campo: string){
    return (
      this.formulario.get(campo).hasError('required') &&
      (this.formulario.get(campo).touched || this.formulario.get(campo).dirty)
    )
  }  

}
