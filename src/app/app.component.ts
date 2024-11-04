import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExampleComponent } from './ui/organisms/example/example.component';
import { ContainerComponent } from './ui/templates/container/container.component';
import { NavbarComponent } from './ui/organisms/navbar/navbar.component';
import { FooterComponent } from './ui/organisms/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ExampleComponent, ContainerComponent, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test';
}
