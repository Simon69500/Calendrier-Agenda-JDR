import { Component } from '@angular/core';
import { HeaderComponent } from "./shared/components/header/header.component";
import { FooterComponent } from './shared/components/footer/footer.component';
import { RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root', // Assure-toi que le sélecteur est "app-root"
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  imports: [
    RouterOutlet,
    RouterModule,
    HeaderComponent,
    FooterComponent,
]
})
export class AppComponent {
  title = 'Calendrier & Agenda JDR'; // Assure-toi que cette propriété est valide
}
