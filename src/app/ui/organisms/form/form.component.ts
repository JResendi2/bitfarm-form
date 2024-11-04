import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { LabelInputComponent } from '../../molecules/label-input/label-input.component';
import { ButtonComponent } from '../../atoms/button/button.component';
import { ReactiveFormsModule, FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { InputStringComponent } from '../../atoms/input-string/input-string.component';
import { LabelComponent } from '../../atoms/label/label.component';
import { InputComponent } from '../../atoms/input/input.component';
import { SubmitDirective } from '../../../directives/submit.directive';
import { DisableButtonService } from '../../../services/DisableButton.directive';
import { response } from 'express';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    CommonModule,
    LabelInputComponent,
    ButtonComponent,
    ReactiveFormsModule,
    InputStringComponent,
    LabelComponent,
    InputComponent,
    SubmitDirective
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent {
  myFormControl: any;
  response:string = 'ok';

  constructor(private fb: FormBuilder, private disableButtonService: DisableButtonService) {
    this.myFormControl = this.fb.group({
      name: ['', [
        Validators.required
      ]]
    });
  }

  // ngOnInit(): void {
  //   this.myFormControl = new FormGroup({
  //     name: new FormControl('', [
  //       Validators.required
  //     ]),
  //   });
  // }

  onSubmit() {
    this.disableButtonService.disableButton();

    if (this.myFormControl.invalid) {
      this.response = 'error';
      setTimeout(()=>{
        this.message();
      }, 3000)
    } else {
      this.response = 'ok';

      setTimeout(()=>{
        this.message();
      }, 3000)
    }

  }

  message(){
    if(this.response === 'ok'){
      alert('Formulario correcto');
    } else {
      alert('Formulario invalido');
    }
    this.disableButtonService.enableButton();
  }

}
