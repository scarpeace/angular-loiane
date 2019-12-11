import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Location} from "@angular/common"

import { CursosService } from '../cursos.service';
import { AlertModalService} from "../../shared/alert-modal/alert-modal.service"

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.css']
})
export class CursosFormComponent implements OnInit {

  form: FormGroup;
  submitted: boolean = false;

  constructor(private fb: FormBuilder, private service: CursosService, private modalService: AlertModalService, private location : Location) { }

  ngOnInit() {
    this.form = this.fb.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]]
    })
  }

  onSubmit(){
    this.submitted = true;
    if(this.form.valid){
      this.service.create(this.form.value).subscribe(
        sucess => {
          this.modalService.showAlertSuccess("Registro criado no banco com sucesso!")
          this.location.back();
        },
        error => this.modalService.showAlertDanger("Erro ao criar curso"),
        //Quando o observable for fechado e completo
        () => console.log('Request Completo!')
      );
    }
  }

  onCancel(){
    this.submitted = false;
    this.form.reset();
  }

  hasErrors(field: string){
    return this.form.get(field).errors
  }

  handleSuccess(){
    
  }

}
