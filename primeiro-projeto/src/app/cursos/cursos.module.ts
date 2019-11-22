import { CursosService } from './cursos.service';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CursosComponent } from "./cursos.component";
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoListagemComponent } from './curso-listagem/curso-listagem.component';

@NgModule({
  declarations: [CursosComponent, CursoDetalheComponent, CursoListagemComponent],
  imports: [CommonModule],
  exports: [CursosComponent],
  providers:[CursosService]
})
export class CursosModule {}
