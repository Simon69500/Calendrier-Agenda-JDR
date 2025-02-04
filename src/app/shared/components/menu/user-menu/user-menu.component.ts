import { Component } from '@angular/core';
import { AuthModalComponent } from './auth-modal/auth-modal.component';

import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



@Component({
  selector: 'app-user-menu',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
  ],
  templateUrl: './user-menu.component.html',
  styleUrl: './user-menu.component.scss'
})
export class UserMenuComponent {

  constructor(public dialog: MatDialog) {}

  openAuthModal() {
    const dialogRef = this.dialog.open(AuthModalComponent, {
      width: '400px',
      height: '500px'
    });
  }
}
