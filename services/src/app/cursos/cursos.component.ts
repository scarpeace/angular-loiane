import { Component, OnInit } from '@angular/core';
import {CursosService} from "./cursos.service"

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
  // providers: [CursosService]
})
export class CursosComponent implements OnInit {

  cursos: string[];
  // //Aqui só declarou o tipo, não instanciou!!
  // cursoService:CursosService;
  constructor(private cursoService: CursosService) {
    this.cursoService = cursoService;
   }

  ngOnInit() {
    this.cursos = this.cursoService.getCursos();
    this.cursoService.emitirCursoCriado.subscribe(
      curso =>console.log(curso)
      /* essa função acima é a mesma coisa que*/
      // function(curso){
      //   console.log(curso)
      // }

    );
  }

}












//ANOTAÇÔES
// cursos: string[];
// //Aqui só declarou o tipo, não instanciou!!
// cursoService:CursosService;
// constructor() {
//   //O construtor é o primeiro a ser executado. ele instancia o serviço para ser usado no momento que componente é
//   this.cursoService = new CursosService();
//  }
