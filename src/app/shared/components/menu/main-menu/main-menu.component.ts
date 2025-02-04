import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import du RouterModule pour la navigation
import { MatButtonModule } from '@angular/material/button';  // Bouton
import { MatIconModule } from '@angular/material/icon';      // Icône (burger)
import { MatMenuModule } from '@angular/material/menu';      // Menu déroulant

@Component({
  selector: 'app-main-menu',
  standalone: true,  // Déclare ce composant comme standalone
  imports: [RouterModule, MatButtonModule, MatIconModule, MatMenuModule],  // Import des modules nécessaires ici
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent {
  // Pas de logique nécessaire pour ce composant standalone
}
