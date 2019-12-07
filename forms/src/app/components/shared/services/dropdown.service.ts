import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

import { EstadoBr } from '../models/estado-br';
import {Cidade} from "../models/cidade"
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DropdownService {
  constructor(private http: HttpClient) {}

  getEstadosBR() {
    return this.http.get<EstadoBr[]>('assets/dados/estadosbr.json')
  }

  getCidadesBR(idEstado: number){
    return this.http.get<Cidade[]>('/assets/dados/cidades.json')
    .pipe(
      map((cidades: Cidade[]) => cidades.filter(cidade => cidade.estado == idEstado ))
    )
  }

  getCargos(){
    return [
      {nome: "Dev", nivel:'Junior', desc:'Dev Junior'},
      {nome: "Dev", nivel:'Pleno', desc:'Dev Pleno'},
      {nome: "Dev", nivel:'Senior', desc:'Dev Senior'}
    ]
  }

  getTecnologias(){
    return[
      {nome: 'Java', desc:'Tecnologia Java'},
      {nome: 'JavaScript', desc:'Tecnologia JavaScript'},
      {nome: 'PHP', desc:'Tecnologia PHP'},
      {nome: 'Ruby', desc:'Tecnologia Ruby'},
    ]
  }

  getNewsletter(){
    return [
      {valor: 's', desc: 'Sim'},
      {valor: 'n', desc: 'Não'}
    ]
  }
  }

