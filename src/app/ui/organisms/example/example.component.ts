import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '../../atoms/title/title.component';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [
    CommonModule, TitleComponent
  ],
  templateUrl: './example.component.html',
  styleUrl: './example.component.css',
})
export class ExampleComponent { }
