import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-data-binding",
  templateUrl: "./data-binding.component.html",
  styleUrls: ["./data-binding.component.css"]
})
export class DataBindingComponent implements OnInit {
  url: string = "http//loiane.com";
  cursoAngular: boolean = true;
  urlImagem: string = "http://lorempixel.com/400/200/nature/"
  dismissible:boolean = true;

  valorAtual: string =""
  valorSalvo: string;
  isMouseOver:boolean =false;

  nomeDoCurso: string = "Angular"


  valorInicial:number = 15;

  getValor() {
    return 1;
  }

  getCurtirCurso(){
    return true;
  }
  constructor() {}

  botaoClicado(){
    alert('Botao Clicado!')
  }

  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
    console.log("The Mouse is Over me!")
  }

  onMudouValor(evento){
    console.log(evento.novoValor);
  }
  ngOnInit() {}
}
