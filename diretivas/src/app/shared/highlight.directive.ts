import { Directive, HostBinding, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[highlight]"
})
export class HighlightDirective {
  @Input('highlight') defaultColor: string = "white";
  @Input() highlightColor: string = "purple";
  @HostBinding("style.backgroundColor") backgroundColor: string;

  @HostListener("mouseenter") onMouseOver() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener("mouseout") onMouseOut() {
    this.backgroundColor = this.defaultColor;
  }

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
  }

  constructor() {}
}
