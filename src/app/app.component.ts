/*
  file-name: app.component.ts
  *****
  The important code for logging-in, signing-up or logging-out are:
  — import 'AuthService'
  — declare variable 'email' and 'password'
  — inject service 'authService' at constructor
  — method for signup()
  — method for login()
  — method for logout()
*/

import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assesment-app';
  email!: string;
  password!: string;

  constructor(public authService: AuthService, router: Router) {
    
  }

  

  

  logout() {
    this.authService.logout();
  }
}
