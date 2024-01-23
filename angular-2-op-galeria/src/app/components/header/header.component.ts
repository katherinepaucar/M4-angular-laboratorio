import { Component, OnDestroy } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { AuthService } from '../../services';
import { MatButtonModule } from '@angular/material/button';
import { EventBusService } from '../../services/event/event-bus.service';
import { Subscription } from 'rxjs';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenuComponent , MatButtonModule, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnDestroy {

  user!: string;
  isLogged = false;

  eventLogin$!: Subscription;
  authService: any;
  constructor(private authSer: AuthService, private eventBusSer: EventBusService){
    this.isLogged = this.authSer.isLogged();
    if(this.isLogged){
      this.user = this.authSer.getUsername();
    }
    this.eventLogin$ = this.eventBusSer.on('Login', (data: any) => {
      console.log('eventLogin$ HeaderComponent', data);
      this.isLogged = data.login;
      if(this.isLogged){
        this.user = data.user;
      }else{
        this.user = '';
      }
     
    });

  }

logout(): void{

  this.authSer.logout();

}

ngOnDestroy(): void {
  if(this.eventLogin$){
    this.eventLogin$.unsubscribe();
  }
}
}
