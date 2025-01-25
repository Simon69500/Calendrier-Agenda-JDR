import { Component } from '@angular/core';
import { HeaderComponent } from "./shared/components/header/header.component";
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
  selector: 'app-root', // Assure-toi que le sélecteur est "app-root"
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Vérifie que ce fichier existe (sinon, mets [])
  ,
  imports: [
    HeaderComponent,
    FooterComponent,
  ]
})
export class AppComponent {
  title = 'Calendrier & Agenda JDR'; // Assure-toi que cette propriété est valide
}
