import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']
})
export class InputPropertyComponent implements OnInit {

  // @Input() nome:string ="";

  //Isso é a mesma coisa que a declaração acima, só estamos setando o input(nome) para ele ser usado externamente
  @Input('nome') nomeCurso: string = ''

  constructor() { }

  ngOnInit() {
  }

}
