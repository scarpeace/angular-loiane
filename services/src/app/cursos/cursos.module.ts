import { CommonModule } from '@angular/Common';
import { NgModule } from '@angular/core';

import {CursosService} from "../cursos/cursos.service";
import { CursosComponent } from './cursos.component'

@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [CursosComponent],
})
export class CursosModule { }
