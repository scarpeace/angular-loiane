import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router"

import {NavbarComponent } from "./navbar/navbar.component";
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component'


@NgModule({
  declarations: [AlertModalComponent, ConfirmModalComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [AlertModalComponent],
  entryComponents: [AlertModalComponent, ConfirmModalComponent]
})
export class SharedModule { }
