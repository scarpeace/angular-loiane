import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { DropdownService } from '../shared/services/dropdown.service';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';
import { EstadoBr } from '../shared/models/estado-br';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {
  
  formulario: FormGroup;
  // estados: EstadoBr[];
  estados: Observable<EstadoBr[]>;
  cargos: Object[];
  tecnologias: Object[];

  constructor(private http: HttpClient, private dropDownService : DropdownService, private cepService : ConsultaCepService) {
    
  }

  ngOnInit(): void {

    this.cargos = this.dropDownService.getCargos();
    this.tecnologias = this.dropDownService.getTecnologias()

    // Só dá pra ser assim quando o valor lá no HTML tem um pipe de ASYNC e a variável tá tipada ali em cima
    this.estados = this.dropDownService.getEstadosBR();

    // this.dropDownService.getEstadosBR()
    // .subscribe(dados => {this.estados = dados, console.log(dados) });
    
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
      }),
      cargo: new FormControl(),
      tecnologia: new FormControl()
    });
    //Segunda forma de escrever o código acima
    // this.formulario = this.formBuilder.group({
    //   nome: [null],
    //   email: [null]
    // })
  }

  consultaCep(){
    const cep = this.formulario.get('endereco.cep').value
    this.cepService.consultaCep(cep).subscribe(dados => this.populaDados(dados))
  }

  onSubmit() {
    //Mostra dados no console

    //AJAX
    if(this.formulario.valid){
      var cep = cep.replace(/\D/g, '');

      if (cep != '') {
        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        if (validacep.test(cep)) {
          this.http
            .post(
              'https://httpbin.org/post',
              JSON.stringify(this.formulario.value)
            )            .subscribe(
              () => {
                this.formulario.reset();
                console.log('Formulario Enviado com sucesso');
              },
              (error: any) => alert(error.message)
            );
        }
      }
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

 

  // VALIDAÇÃO E CSS
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
      return 'is-invalid';
    } else if (!this.formulario.get(campo).pristine) {
      return 'is-valid';
    }
  }

  // CARGOS
  setaCargo(){
    const cargo = {nome: "Dev", nivel:'Junior', desc:'Dev Junior'};
    this.formulario.get('cargo').setValue(cargo);
  }

  // TECNOLOGIAS
  setTecnologias(){
    this.formulario.get('tecnologia').setValue(['Java','JavasScript',"Ruby"])
  }
}
