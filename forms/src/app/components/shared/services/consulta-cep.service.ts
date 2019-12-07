import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {

  constructor(private http : HttpClient) { }
  
  consultaCep(cep : string) {

    //Nova variável cep somente com dígitos
    cep = cep.replace(/\D/g, '')

    
    //Verifica se campo tem valor informado
    if (cep != null && cep !=="") {
       return this.http
        .get(`https://viacep.com.br/ws/${cep}/json`)
    }
  }
  
}

