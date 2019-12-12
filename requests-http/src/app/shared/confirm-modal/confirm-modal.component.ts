import { Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent implements OnInit {

  @Input() titulo: string;
  @Input() message: string;
  @Input() confirmButton: string = "Cancelar"
  @Input() cancelButton: string = "Ok";

  confirmResult$: Subject<boolean>

  constructor(private bsModalRef: BsModalRef) { }

  ngOnInit() {
    this.confirmResult$ = new Subject()
  }
  
  onConfirm(){
    this.onConfirmAndClose(true);
  }

  onClose(){
    this.onConfirmAndClose(false)
  }

  private onConfirmAndClose(valor: boolean){
    this.confirmResult$.next(valor);
    this.bsModalRef.hide()
  }
}
