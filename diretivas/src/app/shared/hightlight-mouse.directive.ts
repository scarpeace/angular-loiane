import {
  Directive,
  HostListener,
  ElementRef,
  Renderer,
  HostBinding
} from "@angular/core";

@Directive({
  selector: "[hightlightMouse]"
})
export class HightlightMouseDirective {
  //Declara uma variável a para ser setada como estilo do host (p), não inicializada
  @HostBinding('style.backgroundColor') backgroundColor: string;

  // private backgroundColor: string;
  // @HostBinding("style.backgroundColor") get Cor() {
  //   console.log("Evento ativado");
  //   return this.backgroundColor;
  // }

  //Não Funciona \/
  // private fontSize:number;
  // @HostBinding('style.fontSize') get setFontSize(){
  //   console.log(this.fontSize);
  //   return this.fontSize;
  // }

  @HostListener("mouseover") onMouseOver() {
    // this._rederer.setElementStyle(
    //   this._elementRef.nativeElement,
    //   "background-color",
    //   "yellow"
    // );
    this.backgroundColor = "black";
  }

  @HostListener("mouseout") onMouseOut() {
    // this._rederer.setElementStyle(
    //   this._elementRef.nativeElement,
    //   "background-color",
    //   "white"
    // );
    this.backgroundColor = "white";
  }

  constructor(private _elementRef: ElementRef, private _rederer: Renderer) {}
}
