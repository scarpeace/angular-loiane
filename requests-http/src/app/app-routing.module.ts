import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CursosComponent} from "./cursos/cursos.component"
import {AlunosComponent} from "./alunos/alunos.component"

const routes: Routes = [
  {path: "", component: CursosComponent},
  {path: "alunos", component: AlunosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
