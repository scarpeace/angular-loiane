import { CursoResolverGuard } from './guards/curso-resolver.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CursosComponent } from './cursos.component';
import { CursosFormComponent } from './cursos-form/cursos-form.component';

const routes: Routes = [
  { path: '', component: CursosComponent },
  {
    path: 'novo', component: CursosFormComponent,
    resolve:
      { curso: CursoResolverGuard }
  },
  {
    path: 'editar/:id', component: CursosFormComponent, resolve:
      { curso: CursoResolverGuard }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
