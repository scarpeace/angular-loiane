import { Curso } from './../curso';
import { tap, switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Location} from "@angular/common"

import { CursosService } from '../cursos.service';
import { AlertModalService} from "../../shared/alert-modal/alert-modal.service"
import { map } from 'rxjs/operators';
import { BsModalRef } from 'ngx-bootstrap/modal/ngx-bootstrap-modal';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.css']
})
export class CursosFormComponent implements OnInit {

  form: FormGroup;
  submitted: boolean = false;
  

  constructor(
    private fb: FormBuilder,
    private service: CursosService,
    private modalService: AlertModalService,
    private location : Location,
    private route: ActivatedRoute,) 
    { }

  ngOnInit() {

    // Populando o formulário com os dados que tão vindo nos parâmetros da rota caso o usuário queira editar 
    //Lembrar que essa função demora alguns milisegundos para ser executada porque é async então não posso usar as variáveis que tão dentro
    //do subscribe fora do escopo da função porque pode correr o erro de voltar um valor vazio caso o observable não tenha sido concluído
    // this.route.params.subscribe((params:any )=>{
    //   if(params.id){
    //     const id = params.id;
    //     this.service.getByID(id).subscribe(curso => this.updateForm(curso))
    //   }
    // })

    // this.route.params.pipe(
    //   map(params => params['id']),
    //   switchMap(id => this.service.getByID(id))
    // )
    // .subscribe(curso=>this.updateForm(curso))

    const curso = this.route.snapshot.data['curso']

    this.form = this.fb.group({
      id:[curso.id],
      nome: [curso.nome, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]]
    })
  }

  onSubmit(){

    
    let msgSucess = "Curso criado com sucesso"
    let msgErro = "Erro ao criar curso"
    if(this.form.value.id){
      msgSucess = "Curso atualizado com sucesso"
      msgErro = "Erro ao atualizar curso"
    }

    this.submitted = true;
    if(this.form.valid){
      
      if(this.form.value.id){
        this.service.save(this.form.value).subscribe(
          sucess => {
            this.modalService.showAlertSuccess(msgSucess)
            this.location.back();
          },
          error => this.modalService.showAlertDanger(msgErro),
          //Quando o observable for fechado e completo
          () => console.log('Update completo!')
        )   
      }
  }
      
  }

  onCancel(){
    this.submitted = false;
    this.form.reset();
  }

  hasErrors(field: string){
    return this.form.get(field).errors
  }

}
