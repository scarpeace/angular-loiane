import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router"

import {NavbarComponent } from "./navbar/navbar.component";
import { AlertModalComponent } from './alert-modal/alert-modal.component'


@NgModule({
  declarations: [AlertModalComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [AlertModalComponent],
  entryComponents: [AlertModalComponent]
})
export class SharedModule { }
