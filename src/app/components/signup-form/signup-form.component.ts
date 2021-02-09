import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  email!: string;
  password!: string;

  constructor(private authService:AuthService) { }

  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';    
  }

  ngOnInit(): void {
  }

}
