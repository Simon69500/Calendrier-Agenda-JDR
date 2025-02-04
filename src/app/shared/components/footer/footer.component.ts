import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';

import {listIcon} from '../../icons';

@Component({
  selector: 'app-footer',
  imports: [
    RouterModule,
    CommonModule,
    MatIconModule,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  icones = listIcon ;
}
