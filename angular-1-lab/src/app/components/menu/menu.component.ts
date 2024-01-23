import { Component, Input, OnDestroy } from '@angular/core';
import { AuthService } from '../../services';
import { NgIf } from '@angular/common';
import { PublicMenuComponent } from './public-menu/public-menu.component';
import { PrivateMenuComponent } from './private-menu/private-menu.component';
import { Subscription } from 'rxjs';
import { EventBusService } from '../../services/event/event-bus.service';
import { EventData } from '../../shared/models';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [PublicMenuComponent, PrivateMenuComponent, NgIf],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnDestroy {
  isLogged = false;
  eventLogin$!: Subscription;

  constructor(private authService: AuthService, private eventBusSer: EventBusService){
    this.isLogged = this.authService.isLogged();
    this.eventLogin$ = this.eventBusSer.on('Login', (data: any) => {
      console.log('eventLogin$', data);
      this.isLogged = data.login;
     });


  }
  ngOnDestroy(): void {
    if(this.eventLogin$){
      this.eventLogin$.unsubscribe();
    }

  }

}
