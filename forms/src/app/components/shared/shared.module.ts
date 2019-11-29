import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDebugComponent } from './form-debug/form-debug.component';
import {FormErrorMessageComponent} from "./form-error-message/form-error-message.component"



@NgModule({
  declarations: [FormDebugComponent, FormErrorMessageComponent],
  imports: [
    CommonModule
  ],
  exports:[FormDebugComponent, FormErrorMessageComponent]
})
export class SharedModule { }
