import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LabelComponent } from '../../atoms/label/label.component';
import { InputStringComponent } from '../../atoms/input-string/input-string.component';

@Component({
  selector: 'app-label-input',
  standalone: true,
  imports: [
    CommonModule, LabelComponent, InputStringComponent
  ],
  templateUrl: './label-input.component.html',
  styleUrl: './label-input.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabelInputComponent {
  @Input() title: string = 'title';
  @Input() name: string = 'name';
  @Input() type: string = 'text';
}
