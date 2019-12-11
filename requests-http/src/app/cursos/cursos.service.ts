import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {tap, delay} from "rxjs/operators"

import { Curso } from './curso';
import {environment} from "../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly API = `${environment.API}cursos` 

  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<Curso[]>(this.API).pipe(
      tap(dados=> console.log(`Dados antes do delay: ${dados}`)),
      delay(2000),
      tap(console.log)
    )
  }
}
