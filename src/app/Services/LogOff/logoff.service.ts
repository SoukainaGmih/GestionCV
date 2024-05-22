import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogoffService {
  constructor() { }
  private loggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.loggedIn.asObservable();

  get isLoggedIn(): boolean {
    return this.loggedIn.value;
  }

  logoff(): void {
    this.loggedIn.next(false);
  }

  login(): void {
    this.loggedIn.next(true);
  }
}
