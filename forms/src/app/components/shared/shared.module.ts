import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms"
import {ReactiveFormsModule} from "@angular/forms"

import { FormDebugComponent } from './form-debug/form-debug.component';
import { DropdownService } from './services/dropdown.service';
import { HttpClientModule } from '@angular/common/http';
import { ErrorMsgComponent } from './error-msg/error-msg.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { BaseFormComponent } from './base-form/base-form.component';





@NgModule({
  declarations: [FormDebugComponent, ErrorMsgComponent, InputFieldComponent, BaseFormComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[FormDebugComponent, ErrorMsgComponent, InputFieldComponent, BaseFormComponent],
  providers: [DropdownService]
})
export class SharedModule { }
