import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-error-message',
  templateUrl: './form-error-message.component.html',
  styleUrls: ['./form-error-message.component.css']
})
export class FormErrorMessageComponent implements OnInit {

  @Input() mostrarErro: any;
  @Input() msgErro: string
  constructor() { }

  ngOnInit() {
  }

}
