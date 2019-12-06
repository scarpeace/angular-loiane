import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const INPUT_FIELD_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputFieldComponent),
  multi: true
}

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css'],
  providers:[INPUT_FIELD_VALUE_ACCESSOR]
})
export class InputFieldComponent implements ControlValueAccessor {
  
  @Input() classeCss;
  @Input() id:string;
  @Input() label: string;
  @Input() type = 'text'
  @Input() control;
  @Input() isReadOnly = false;


  private innerValue: any;
  
  writeValue(v: any): void {
    this.value = v
  }
  registerOnChange(fn: any): void {
    this.onChangeCb = fn;
    console.log(this.control.errors)
  }
  registerOnTouched(fn: any): void {
    this.onTouchedCb = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isReadOnly = isDisabled;
  }

  get value(){
    return this.innerValue;
  }

  set value(valorQualquer: any){
    if(valorQualquer != this.innerValue){
      this.innerValue = valorQualquer;
      this.onChangeCb(valorQualquer);
    }
  }

  onChangeCb: (_: any) => void = () => {}
  onTouchedCb: (_: any) => void = () => {}

}
  


