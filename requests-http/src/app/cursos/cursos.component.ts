import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Curso } from './curso';
import { Observable, empty, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {Router, ActivatedRoute} from "@angular/router"

import { CursosService } from './cursos.service';
import {AlertModalService} from "../shared/alert-modal/alert-modal.service"

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  @ViewChild('deleteModal', {static: false}) deleteModal;
  deleteModalRef: BsModalRef

  cursos$: Observable<Curso>;
  error$ = new Subject<boolean>()
  
  cursoSelecionado: Curso;
  

  constructor(private service: CursosService, 
    private alertModalService: AlertModalService, 
    private modalService: BsModalService,
    private router : Router, 
    private route : ActivatedRoute) 
    { }

  ngOnInit() {
   this.onRefresh();
  }

  onRefresh(){
    this.cursos$ = this.service.list()
    .pipe(
      catchError(error => {
        console.error(error);
        //this.error$.next(true);
        this.handleError()
        return empty();
      })
    )}

    onEdit(id){
      this.router.navigate(['editar', id], {relativeTo: this.route})
    }

    onDelete(curso){
      this.cursoSelecionado = curso
      this.deleteModalRef = this.modalService.show(this.deleteModal, {class: 'modal-sm'})
    }

    onConfirmDelete(){
      this.service.remove(this.cursoSelecionado.id).subscribe(
        sucess => {this.onRefresh()
           this.deleteModalRef.hide()
           this.alertModalService.showAlertSuccess("Curso Excluído com sucesso")},
        error => {
          this.alertModalService.showAlertDanger("Erro ao excluir curso, tente novamente mais tarde")
          this.deleteModalRef.hide()}
      )
    }

    onDeclineDelete(){
      this.deleteModalRef.hide()
    }

    handleError(){
      this.alertModalService.showAlertDanger("Erro ao carregar cursos, tente novamente mais tarde")
    }
}
