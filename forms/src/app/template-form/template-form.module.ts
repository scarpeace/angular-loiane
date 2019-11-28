import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TemplateFormComponent } from '../components/template-form/template-form.component';



@NgModule({
  declarations: [TemplateFormComponent],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class TemplateFormModule { }
