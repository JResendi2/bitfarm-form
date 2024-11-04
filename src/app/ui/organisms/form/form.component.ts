import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LabelInputComponent } from '../../molecules/label-input/label-input.component';
import { ButtonComponent } from '../../atoms/button/button.component';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    CommonModule, LabelInputComponent, ButtonComponent, ReactiveFormsModule
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent implements OnInit {
  myFormControl: any;

  ngOnInit(): void {
    this.myFormControl = new FormGroup({
      name: new FormControl('', [
        Validators.required
      ]),
    });
  }

  onSubmit() {
    if (this.myFormControl.invalid) {
      alert('Formulario invalido');
      return;
    }

    alert('Formulario correcto')

  }
}
