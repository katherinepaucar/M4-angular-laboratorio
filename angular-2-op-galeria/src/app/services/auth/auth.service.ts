import { Injectable } from '@angular/core';
import { EventData, UserModel } from '../../shared/models';
import { Router } from '@angular/router';
import { EventBusService } from '../event/event-bus.service';
import { LocalStorageService } from 'ngx-webstorage';
import { USER } from '../../constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 username: string = 'master@lemoncode.net';
 password:string ='12345678';

  constructor(private route: Router, private eventBusSer: EventBusService, private storage: LocalStorageService) { }

  login(user: UserModel): boolean {
    console.log('user', user);
    if(user.username === this.username && user.password === this.password){
      this.storage.store(USER, user.username);
      this.route.navigate(['/dashboard']);
      this.eventBusSer.emit(new EventData('Login', { login: true, user: user.username}));
      return true;
    }
    return false;    
  }

  logout():void{
    this.storage.clear(USER);
    this.eventBusSer.emit(new EventData('Login', false));
    this.route.navigate(['/home']);
  }

  isLogged(): boolean{
    const userName = this.storage.retrieve(USER);
    if(userName){
      return true;
    }
    return false;
  }
  getUsername(): string{
    if(this.isLogged()){
        return this.storage.retrieve(USER);;
    }
    return '';

  }
}
