import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import {FormValidation} from "../form-validation"

@Component({
  selector: 'app-error-msg',
  templateUrl: './error-msg.component.html',
  styleUrls: ['./error-msg.component.css']
})
export class ErrorMsgComponent implements OnInit {

  //@Input() mostrarErro: any;
  //@Input() msgErro: string
  @Input() control: FormControl
  @Input() label: string;

  constructor() {
   }

  ngOnInit() {
  }

  showControl(){
    console.log(this.control)
  }

  get errorMessage() {

    for (const propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && (this.control.touched && this.control.pristine)) {
          const msg = FormValidation.getErrorMsg(this.label, propertyName, this.control.errors[propertyName]); 
          console.log(msg);
        }
    }

    return null;
  }
}
