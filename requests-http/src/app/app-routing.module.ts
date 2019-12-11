import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursosComponent } from './cursos/cursos.component';
import { CursosRoutingModule } from './cursos/cursos-routing.module';
import {AlunosComponent} from "./alunos/alunos.component"

const routes: Routes = [
  {path: "", component: CursosComponent},
  {path: 'cursos',
  loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, CursosRoutingModule]
})
export class AppRoutingModule { }
