import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  token?:string | null = localStorage.getItem("token");
  isLoggedIn?: boolean;
  mobile: boolean = false;

  constructor(private router:Router, public authService: AuthService) { 
    if(this.token) {
      this.isLoggedIn = true;
    }
    else this.isLoggedIn = false;
    
  }

  ngOnInit(): void {
  }

  isAuthenticated(){
    return this.authService.isLoggedIn();
  }

  logout() {
    
    this.authService.logout();
  }

  toggleMobileMenu () {
    this.mobile = !this.mobile;
  }

}
