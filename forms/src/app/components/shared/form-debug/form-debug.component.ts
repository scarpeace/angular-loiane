import { Component, OnInit, Input, Type } from '@angular/core';

@Component({
  selector: 'app-form-debug',
  templateUrl: './form-debug.component.html',
  styleUrls: ['./form-debug.component.css']
})
export class FormDebugComponent implements OnInit {

  @Input() form;
  static FormErrorComponent: any[] | Type<any>;

  constructor() { }

  ngOnInit() {
    console.log(this.form)
  }

}
