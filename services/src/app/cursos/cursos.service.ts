import { Injectable, EventEmitter } from '@angular/core';
import {LogService} from "../shared/log.service"

@Injectable()

export class CursosService{

 emitirCursoCriado = new EventEmitter<string>();
 static criouNovoCurso = new EventEmitter<string>();

  cursos:string[] = ['Angular 2', 'Javascript', 'HTML']

  constructor(private logService: LogService){
    console.log('CursosService')
  }

  getCursos(){
    this.logService.consoleLog('Obtendo lista de cursos')
    return this.cursos;
  }

  addCurso(curso:string){
    this.logService.consoleLog(`Curso criado com sucesso => ${ curso }`)
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso)
    CursosService.criouNovoCurso.emit(curso);
  }

};
