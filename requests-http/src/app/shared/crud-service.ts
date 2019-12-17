import { delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { take, tap } from 'rxjs/operators';
import { environment } from './../../environments/environment.prod';

export class CrudService<T> {

  private readonly API = `${environment.API}cursos`
  constructor(protected http: HttpClient, private API_URL){}


  list(){
    return this.http.get<T[]>(this.API_URL).pipe(
      tap(dados=> console.log(`Dados antes do delay: ${dados}`)),
      delay(1000),
      tap(console.log)
    )
  }

  private create(record : T){
    //Retona uma resposta HTTP
    return this.http.post(this.API_URL, record).pipe(take(1))
  }

  private update(record : T){
    return this.http.put(`${this.API_URL}/${record['id']}`, record).pipe(take (1))
  }
  
  getByID(id){
    return this.http.get<T>(`${this.API_URL}/${id}`).pipe(take(1))
  }

  save(record : T){
    if(record['id']){
     return this.update(record)
    }
     return this.create(record)
  }

  remove(id){
    return this.http.delete(`${this.API}/${id}`).pipe(take(1))
  }
}


