import { Injectable } from '@angular/core';
import { EventData } from '../../shared/models';
import { Observable, Subject, Subscription, filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventBusService {


    
  private subject$ = new Subject<any>();

  constructor() { }

  emit(event: EventData) {
    this.subject$.next(event);
  }

  on(eventName: string, action: any): Subscription{
    return this.subject$.pipe(
      filter( (e: EventData) => e.name === eventName),
      map( (e: EventData) => e.value))
      .subscribe(action);
  }
}
