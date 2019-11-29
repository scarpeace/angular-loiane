import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private http: HttpClient
    ) { }

  ngOnInit() {

   this.formulario = new FormGroup({
     name: new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(30)]),
     email: new FormControl(null, [Validators.required, Validators.email])
   });

    //Segunda forma de escrever o código acima
    // this.formulario = this.formBuilder.group({
    //   nome: [null],
    //   email: [null]
    // })
  }

  onSubmit(){
    //Mostra dados no console
    console.log(this.formulario)
      //AJAX
      this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
      .pipe(map(res => res))
      .subscribe(dados => {
        this.formulario.reset();
      },
        (error: any) => alert(error.message)
      );
    }

    resetarForm(){
      this.formulario.reset();
    }

    verificaValidTouched(campo){ //RECEBE O NOME DO CAMPO
      //O get do formulario já retorna as informações baseado no nome do campo do formulário
      return !this.formulario.get(campo).valid && this.formulario.get(campo).touched && !this.formulario.get(campo).pristine
    }

    verificaEmailValido(campo){
      console.log(this.formulario)
      if(this.formulario.get(campo).errors){
        return this.formulario.get(campo).errors.email
      }
    }

    aplicaCssErro(campo){
      if(this.verificaValidTouched(campo)){
        return 'is-invalid'
      }else if(!this.formulario.get(campo).pristine){
        return 'is-valid'
      }
    }

  }
