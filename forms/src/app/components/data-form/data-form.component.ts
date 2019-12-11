import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormArray,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, empty } from 'rxjs';
import { tap, map, switchMap } from 'rxjs/operators';

import { DropdownService } from '../shared/services/dropdown.service';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';
import { EstadoBr } from '../shared/models/estado-br';
import { FormValidation } from '../shared/form-validation';
import { VerificaEmailService } from './services/verifica-email.service';
import {BaseFormComponent} from "../shared/base-form/base-form.component"
import { Cidade } from '../shared/models/cidade';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent extends BaseFormComponent implements OnInit {
  
  

  // formulario: FormGroup;
  estados: EstadoBr[];
  cidades: Cidade[];
  //estados: Observable<EstadoBr[]>;
  cargos: Object[];
  tecnologias: Object[];
  newsletterOp: any[];
  frameworks = ['Angular', 'React', "Vue", "Sencha"]

  constructor(
    private http: HttpClient,
    private dropDownService: DropdownService,
    private cepService: ConsultaCepService,
    private verificaEmailService : VerificaEmailService
    ){
       super()
      }

  ngOnInit(): void {

    // this.verificaEmailService.verificarEmailNoBanco('email@email.com').subscribe();
     
    this.cargos = this.dropDownService.getCargos();
    this.tecnologias = this.dropDownService.getTecnologias();
    this.newsletterOp = this.dropDownService.getNewsletter();

    // Só dá pra ser assim quando o valor lá no HTML tem um pipe de ASYNC e a variável tá tipada ali em cima
    //this.estados = this.dropDownService.getEstadosBR();

    this.dropDownService.getEstadosBR()
    .subscribe(dados=> this.estados = dados)

    // this.dropDownService.getEstadosBR()
    // .subscribe(dados => {this.estados = dados, console.log(dados) });

    this.formulario = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      confirmarEmail: new FormControl(null, [Validators.required,]),

      endereco: new FormGroup({
        cep: new FormControl(null, [Validators.required, FormValidation.cepValidator]),
        numero: new FormControl(null, Validators.required),
        complemento: new FormControl(null),
        rua: new FormControl(null, Validators.required),
        bairro: new FormControl(null, Validators.required),
        cidade: new FormControl(null, Validators.required),
        estado: new FormControl(null, Validators.required)
      }),
      cargo: new FormControl(),
      tecnologia: new FormControl(),
      newsletter: new FormControl('s'),
      termos: new FormControl(null, Validators.pattern('true')),
      // Lembrar que frameworks é um array de controles, então pra usar ele no HTML tem com ter o index declarado no ngFor
      frameworks: this.buildFrameworks()
    });

    //Populando a cidade baseado na escolha do cep
    this.formulario.get('endereco.estado').valueChanges
    .pipe(
      tap(estado => console.log(`Novo Estado: ${estado}`)),
      map(estado => this.estados.filter(e => e.sigla == estado)),
      map(estados => estados && estados.length > 0 ? estados[0].id : empty() ),
      switchMap((estadosId: number) => this.dropDownService.getCidadesBR(estadosId)),
      tap(console.log)
    )
    .subscribe(cidades => this.cidades = cidades)

  }  // final do ngOnInit()

  buildFrameworks() {
    //Essa função seta cada valor do array frameworks como sendo um Form Control,
    const values = this.frameworks.map(v => new FormControl(false));
    return new FormArray(values, FormValidation.requiredMinCheckbox(1));
  }

  showStatus(control){
    console.log(control.status)
  }

  consultaCep() {
    const cep = this.formulario.get('endereco.cep').value
    this.cepService.consultaCep(cep).subscribe(dados => this.populaDados(dados))
  }

  submit() {
    let valueSubmit = Object.assign({}, this.formulario.value);
    valueSubmit = Object.assign(valueSubmit, {
      frameworks: valueSubmit.frameworks
      .map((v, i) => v ? this.frameworks[i] : null)
      .filter(v => v !== null)
    });
    
    console.log(`Frameworks sendo enviados no formulário: ${valueSubmit}`);
    
    //AJAX
    this.http.post('https://httpbin.org/post',JSON.stringify(this.formulario.value))
      .subscribe(() => {
      this.formulario.reset();
      console.log('Formulario Enviado com sucesso')},
      (error: any) => alert(error.message)
      );
  }
  
  populaDados(dados) {
    this.formulario.patchValue({
      endereco: {
        cep: dados.cep,
        complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf,
      }
    });
  }
 
  // CARGOS
  setaCargo() {
    const cargo = { nome: "Dev", nivel: 'Junior', desc: 'Dev Junior' };
    this.formulario.get('cargo').setValue(cargo);
  }

  // TECNOLOGIAS
  setTecnologias() {
    this.formulario.get('tecnologia').setValue(['Java', 'JavasScript', "Ruby"])
  }

  resetaDadosForm(){
    this.formulario.patchValue({
      endereco:{
        rua:null,
        complemento:null,
        bairro:null,
        cidade:null,
        estado:null,
      }
    })
  }
}
