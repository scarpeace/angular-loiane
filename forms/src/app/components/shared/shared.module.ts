import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormDebugComponent } from './form-debug/form-debug.component';
import {FormErrorMessageComponent} from './form-error-message/form-error-message.component'
import { DropdownService } from './services/dropdown.service';
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [FormDebugComponent, FormErrorMessageComponent],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports:[FormDebugComponent, FormErrorMessageComponent],
  providers: [DropdownService]
})
export class SharedModule { }
