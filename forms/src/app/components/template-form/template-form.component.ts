import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import {map} from "rxjs/operators"

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

    usuario:any = {
      nome: null,
      email: null
    }

  onSubmit(form){
    console.log(form.value)

    this.http.post('https://httpbin.org/post', JSON.stringify(form.value))
    .pipe(map(res => res))
    .subscribe(dados => console.log(dados));
  }

  verificaValidTouched(campo){
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo){
    return{
      'has-error' : this.verificaValidTouched(campo),
      'has-feedback' : this.verificaValidTouched(campo)
    }
  }

  consultaCep(cep, form){
      //Nova variável cep somente com dígitos.
      var cep = cep.replace(/\D/g, '');

      if (cep != "") {

        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

         //Valida o formato do CEP.
         if(validacep.test(cep)) {
           this.http.get(`//viacep.com.br/ws/${cep}/json`).pipe(map(dados => dados)).subscribe(data => this.populaDadosForm(data , form))

         }
      }
  }

  populaDadosForm(dados, formulario){
    // formulario.setValue({
    //   name: formulario.value.name,
    //   email: formulario.value.email,
    //   endereco: {
    //     cep: dados.cep,
    //     numero: "",
    //     complemento: dados.complemento,
    //     rua: dados.logradouro,
    //     bairro: dados.bairro,
    //     cidade: dados.localidade,
    //     estado: dados.uf
    //   }
    // })

    formulario.form.patchValue({
      endereco: {
        cep: dados.cep,
        complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    })
  }

  resetaDadosForm(formulario){
    formulario.form.patchValue(
      {
        name: null,
        email: null,
        endereco: {
          cep: null,
          numero: null,
          complemento: null,
          rua: null,
          bairro: null,
          cidade: null,
          estado: null
        }
      }
    )
  }
}
