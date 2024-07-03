import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  private is_logged_in: boolean = false;
  changed: EventEmitter<boolean> = new EventEmitter<boolean>();

  isLoggedIn() {
    return this.is_logged_in;
  }

  login(email: string, password: string): boolean {
    if (email === 'alisha.blank@stud.hshl.de' && password === 'password') {
      this.is_logged_in = true;
      this.changed.emit(true);
      return true;
    } else {
      return false;
      
    }
  }

  logout() {
    this.is_logged_in = false;
    this.changed.emit(false);
  }
}
