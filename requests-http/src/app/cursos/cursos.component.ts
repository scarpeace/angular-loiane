import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';
import { Curso } from './curso';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: Curso[];

  constructor(private service: CursosService) { }

  ngOnInit() {
    this.service.list().subscribe(dados => this.cursos = dados)
  }

}
