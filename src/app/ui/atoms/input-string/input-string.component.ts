import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  selector: 'app-input-string',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './input-string.component.html',
  styleUrl: './input-string.component.css',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputStringComponent),
      multi: true
    }
  ]
})
export class InputStringComponent implements ControlValueAccessor {

  @Input() type: string = 'text';
  value: string = '';

  onChange: (value: string) => void = () => { };
  onTouched: () => void = () => { };

  writeValue(obj: any): void {
    console.log("writeValue:", obj)
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
    console.log("registerOnChange", fn)
  }

  registerOnTouched(fn: any): void {
    // this.onTouched = fn;
    console.log("registerOnTouched", fn)
  }

  setDisabledState?(isDisabled: boolean): void {
    console.log("setDisabledState", isDisabled)
  }

  setValue(value: string) {
    this.value = value;
    this.onChange(value);
    // this.onTouched();
  }

  handleInput(event:any){
    console.log(event.target.value)
    this.setValue(event.target.value);
  }

}
