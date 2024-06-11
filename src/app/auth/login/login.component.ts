import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from 'C:/Users/lisha/source/repos/danceENWebNeu/src/app/shared/authorization-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login_error: boolean = false;

  constructor(private auth: AuthorizationService, private router: Router) {
    this.auth.changed.subscribe((result) => {
      if (result) this.router.navigate(['/teilnehmer']);
    });
  }

  onSubmit(email: string, password: string) {
    if (!this.auth.login(email, password)) {
      this.login_error = true;
    }
  }
}