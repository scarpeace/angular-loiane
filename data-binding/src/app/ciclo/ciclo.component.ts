import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit {

  @Input() valorInicial:number =10;



  constructor() {
    console.log('On Constructor')
   }

   ngOnChanges(){
     console.log("On Change")
   }

  ngOnInit() {
    console.log("On Init")
  }

}
