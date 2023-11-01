import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterServiceService {
  userLoggedIn: EventEmitter<any> = new EventEmitter();
  userLoggedOut: EventEmitter<any> = new EventEmitter();

  constructor() { }
}
