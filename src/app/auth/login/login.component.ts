import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from '../../shared/authorization-service.service';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  login_error: boolean = false;

  constructor(private auth: AuthorizationService, private router: Router) { }

  onSubmit() {
    if (this.auth.login(this.email, this.password)) {
      this.router.navigate(['/teilnehmer']);
    } else {
      this.login_error = true;
    }
  }
}
