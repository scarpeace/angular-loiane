import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';
import { Observable, empty, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { CursosService } from './cursos.service';
import {AlertModalService} from "../shared/alert-modal/alert-modal.service"

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos$: Observable<Curso>;
  error$ = new Subject<boolean>()

  constructor(private service: CursosService, private alertModalService: AlertModalService) { }

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
      this.alertModalService.showAlertDanger("Erro ao carregar cursos, tente novamente mais tarde")
    }
}
