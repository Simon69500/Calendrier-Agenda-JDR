import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-user-compte',
  imports: [
   FormsModule,
   CommonModule,
   MatButtonModule,
   MatCardModule
  ],
  templateUrl: './user-compte.component.html',
  styleUrls: ['./user-compte.component.scss', '../../../../../../styles/interface.scss']
})
export class UserCompteComponent {

    isEditing: boolean = false; // Mode édition activé/désactivé

    user = {
      pseudo: 'JohnDoe',
      dicton: 'Vivez chaque jour comme le dernier.',
      classe: '',
      email: 'john@example.com',
      telephone: '+33 6 12 34 56 78',
      avatar: 'assets/icones-avatar/dragon1.png'
    };

    classeUser: string[] = [
      'Guerrier',
      'Mage',
      'Archer',
      'Assassin',
      'Paladin'
    ]

    // Sauvegarde les modifications et désactive le mode édition
    saveChanges() {
      this.isEditing = false;
    }

    // Annule les modifications en rechargeant les valeurs par défaut
    cancelEdit() {
      this.isEditing = false;
    }

    onFileSelected(event: Event) {
      const input = event.target as HTMLInputElement;
      if (input.files && input.files.length > 0) {
        const file = input.files[0];
        const reader = new FileReader();

        reader.onload = () => {
          this.user.avatar = reader.result as string; // Met à jour l'image avec l'aperçu
        };

        reader.readAsDataURL(file);
      }
  }
}
