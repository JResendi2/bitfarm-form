import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { LabelComponent } from '../../atoms/label/label.component';
import { InputStringComponent } from '../../atoms/input-string/input-string.component';
import { ReactiveFormsModule, FormControl, FormGroup, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-label-input',
  standalone: true,
  imports: [
    CommonModule, LabelComponent, InputStringComponent,ReactiveFormsModule,
  ],
  templateUrl: './label-input.component.html',
  styleUrl: './label-input.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabelInputComponent implements ControlValueAccessor, OnInit{

  @Input() title: string = 'title';
  @Input() type: string = 'text';
  @Input() control!: FormControl;

  ngOnInit(): void {
    console.log(this.control);
  }


  writeValue(obj: any): void {
    console.log(obj);

  }
  registerOnChange(fn: any): void {

  }
  registerOnTouched(fn: any): void {

  }
  setDisabledState?(isDisabled: boolean): void {

  }
}
