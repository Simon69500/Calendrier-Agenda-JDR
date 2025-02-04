import { Component } from '@angular/core';

import { MainMenuComponent } from "../menu/main-menu/main-menu.component";
import { UserMenuComponent } from '../menu/user-menu/user-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MainMenuComponent,
    UserMenuComponent,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

}
