import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Component({
  selector: "app-data-form",
  templateUrl: "./data-form.component.html",
  styleUrls: ["./data-form.component.css"]
})
export class DataFormComponent implements OnInit {
  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.formulario = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(30)
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),

      endereco: new FormGroup({
        cep: new FormControl(null, Validators.required),
        numero: new FormControl(null, Validators.required),
        complemento: new FormControl(null),
        rua: new FormControl(null, Validators.required),
        bairro: new FormControl(null, Validators.required),
        cidade: new FormControl(null, Validators.required),
        estado: new FormControl(null, Validators.required)
      })
    });

    //Segunda forma de escrever o código acima
    // this.formulario = this.formBuilder.group({
    //   nome: [null],
    //   email: [null]
    // })
  }

  onSubmit() {
    //Mostra dados no console
    console.log(`Dados do formulário sendo enviados ${this.formulario}`);

    //AJAX
    if(this.formulario.valid){
      var cep = cep.replace(/\D/g, "");

      if (cep != "") {
        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        if (validacep.test(cep)) {
          this.http
            .post(
              "https://httpbin.org/post",
              JSON.stringify(this.formulario.value)
            )
            .pipe(map(res => res))
            .subscribe(
              () => {
                this.formulario.reset();
                console.log("Formulario Enviado com sucesso");
              },
              (error: any) => alert(error.message)
            );
        }
      }
    }else{

      //Aqui faz as validações do campo e marcam ele com a classe CSS com a função markAsDirty (markAsTouched)
      console.log("Formulario inválido: ")
      console.log(this.formulario.controls)
    }
  }

  verificarValidacoesForm(formGroup: FormGroup){
    Object.keys(formGroup.controls).forEach(campo =>{
      const controle = formGroup.get(campo);
      controle.markAsDirty();

      if(controle instanceof FormGroup){
        this.verificarValidacoesForm(controle)
      }
    })
  }

  consultaCep() {
    const valorDoCampo = this.formulario.get('endereco.cep').value

    if (valorDoCampo !== null) {
      this.http
        .get(`https://viacep.com.br/ws/${valorDoCampo}/json`)
        .pipe(map(respostaDoServer => respostaDoServer))
        .subscribe(
          dadosDoServidor => {
            this.populaDados(dadosDoServidor);
          },
          (error: any) => console.log(error)
        );
    }
  }

  populaDados(dados) {
    this.formulario.patchValue({
      endereco: {
        cep: dados.cep,
        complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
  }

  resetarForm() {
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

  aplicaCssErro(campo) {
    if (this.verificaValidTouched(campo)) {
      return "is-invalid";
    } else if (!this.formulario.get(campo).pristine) {
      return "is-valid";
    }
  }
}
