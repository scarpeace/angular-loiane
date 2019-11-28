import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FormDebugComponent } from '../form-debug/form-debug.component';
import { TemplateFormComponent } from './template-form.component';




@NgModule({
  declarations:[FormDebugComponent, TemplateFormComponent],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class TemplateFormModule { }
