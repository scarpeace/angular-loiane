import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VerificaEmailService {

  constructor(private http: HttpClient) { }

  verificarEmailNoBanco(email: string){
    return this.http.get('assets/dados/verificarEmail.json')
    .pipe(
      //Quantos segundos
      delay(2000),
      map((dados: {emails: any[]}) => dados.emails),
      //DO - aqui tipo faz algo no meio do map rapidão 
      // tap(console.log),
      map((dados: {email: string}[] ) => dados.filter(v => v.email === email)),
      // tap(console.log),
      map((dados: any[]) => dados.length > 0),
      // tap(console.log)
    )
  }
}
