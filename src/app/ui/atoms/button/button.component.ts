import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { SubmitDirective } from '../../../directives/submit.directive';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    CommonModule, SubmitDirective
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent{
  @Input() text: string = 'button';
}
