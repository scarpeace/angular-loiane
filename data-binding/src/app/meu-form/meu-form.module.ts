import { FormsModule } from '@angular/forms';
import { MeuFormComponent } from './meu-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [MeuFormComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[MeuFormComponent]
})
export class MeuFormModule { }
