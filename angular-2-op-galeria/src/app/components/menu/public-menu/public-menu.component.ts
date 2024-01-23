import { Component } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-public-menu',
  standalone: true,
  imports: [MatMenuModule, RouterModule],
  templateUrl: './public-menu.component.html',
  styleUrl: './public-menu.component.scss'
})
export class PublicMenuComponent {

}
