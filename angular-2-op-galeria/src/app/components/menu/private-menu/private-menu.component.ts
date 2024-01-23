import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../services';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-private-menu',
  standalone: true,
  imports: [RouterModule, MatButtonModule],
  templateUrl: './private-menu.component.html',
  styleUrl: './private-menu.component.scss'
})
export class PrivateMenuComponent {
}
