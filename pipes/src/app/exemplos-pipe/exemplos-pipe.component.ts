import { Component, OnInit, } from "@angular/core";
import { Observable } from 'rxjs';

@Component({
  selector: "app-exemplos-pipe",
  templateUrl: "./exemplos-pipe.component.html",
  styleUrls: ["./exemplos-pipe.component.scss"]
})
export class ExemplosPipeComponent implements OnInit {
  livro: any = {
    titulo: "Learning Javascript Data Structures and Algorithms 2nd ed",
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 33.99,
    dataLancamento: new Date(2016, 5, 23),
    url: "http://lorempixel.com/400/300/abstract/"
  };

  livros: string[] =["Java", "Angular2"]
  filtro:string;

  cursos:string[] = ["Java","Java 2" , "Javascript"];

  valorAsync2 = new Observable;


  constructor() { }

  ngOnInit() {}

  addCurso(curso){
    this.cursos.push(curso);
    console.log(`O curso ${curso} foi adicionado com sucesso!`)
    console.log("Nova lista de cursos")
    this.cursos.map(curso => console.log(curso));
  }

  obterCurso(){
    if (this.livros.length === 0 || this.filtro === undefined){
      return this.livros;
    }

    return this.livros.filter((v)=>{
      if(v.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0){
        return true
      }
      return false;
    })
  }

  valorAsync = new Promise((resolve, reject)=>{
    setTimeout(()=> resolve('Valor assíncrono'), 4000)
  })


}


