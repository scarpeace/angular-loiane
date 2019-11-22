import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {CursosRoutingModule} from "./cursos.routing.module"
import { CursoDetalheComponent } from "./curso-detalhe/curso-detalhe.component";
import { CursoNaoEncontradoComponent } from "./curso-nao-encontrado/curso-nao-encontrado.component";
import { CursosComponent } from "./cursos.component";
import { CursosService } from "./cursos.service";

@NgModule({
  //Importação dos modulos do Angular e modulos criados pelo Desenvolvedor
  imports: [CommonModule, CursosRoutingModule],
  //Declaração dos Componentes
  declarations: [
    CursosComponent,
    CursoDetalheComponent,
    CursoNaoEncontradoComponent
  ],
  //Aqui vão os Services, todas as declarações tem acesso
  providers: [CursosService]
})
export class CursosModule {}
