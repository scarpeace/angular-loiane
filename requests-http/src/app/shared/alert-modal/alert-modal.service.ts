import { Injectable } from '@angular/core';
import {BsModalService} from "ngx-bootstrap/modal"

import { AlertModalComponent } from './alert-modal.component';

enum AlertTypes{
  'DANGER' = "danger",
  "SUCCESS" = "success"
}

@Injectable({
  providedIn: 'root'
})
export class AlertModalService {

  constructor(private modalService: BsModalService) { }

  private showAlert(message: string, type: string, dismissTimeout ?: number){
    const bsModalRef = this.modalService.show(AlertModalComponent);
    bsModalRef.content.type = type
    bsModalRef.content.message = message
    //setando um timeout pro modal fechar sozinho
    if(dismissTimeout){
      setTimeout(() => bsModalRef.hide(), dismissTimeout)
    }
  }

  showAlertDanger(message: string){
    this.showAlert(message, AlertTypes.DANGER);
  }

  showAlertSuccess(message:string){
    this.showAlert(message, AlertTypes.SUCCESS, 3000)
  }

}