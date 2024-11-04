import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from '../../organisms/navbar/navbar.component';
import { FormComponent } from '../../organisms/form/form.component';
import { FooterComponent } from '../../organisms/footer/footer.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [
    CommonModule, FormComponent,
  ],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ContainerComponent { }
