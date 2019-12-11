import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';
import { Observable, empty, Subject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { AlertModalComponent } from './../shared/alert-modal/alert-modal.component';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos$: Observable<Curso>;
  error$ = new Subject<boolean>()

  constructor(private service: CursosService, private modalService: BsModalService) { }

  bsModalRef: BsModalRef;
  
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

    handleError(){
      this.bsModalRef = this.modalService.show(AlertModalComponent);
      this.bsModalRef.content.type='danger'
      this.bsModalRef.content.message='Erro ao carregar cursos tente novamente mais tarde'
    }
}
