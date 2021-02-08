import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  email!: string;
  password!: string;

  constructor(public authService: AuthService) {
    
  }


  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';    
  }

  logout() {
    this.authService.logout();
  }


  ngOnInit(): void {

  }

}
