import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<input type="text">`,
  styleUrl: './input.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent implements ControlValueAccessor {

  value: string = '';

  onChange: (value: string) => void = () => { };
  onTouched: () => void = () => { };

  writeValue(obj: any): void {
    console.log("writeValue")
  }
  registerOnChange(fn: any): void {
    console.log("registerOnChange")
  }
  registerOnTouched(fn: any): void {
    console.log("registerOnTouched")
  }
  setDisabledState?(isDisabled: boolean): void {
    console.log("setDisabledState")
  }

  setValue(value: string) {
    this.value = value;
    this.onChange(value);
    this.onTouched();
  }
}
