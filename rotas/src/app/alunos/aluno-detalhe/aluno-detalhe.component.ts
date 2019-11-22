import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import {AlunosService} from "../alunos.service"


@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit {

  inscricao: Subscription;
  aluno:any;

  constructor(private route: ActivatedRoute, private alunoService: AlunosService, private router: Router) { }

  editarContato(){
    this.router.navigate(['/alunos', this.aluno.id, 'editar' ])
  }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe((params:any)=>{
      let id = params.id;
      this.aluno = this.alunoService.getAlunoById(id);
    })
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
