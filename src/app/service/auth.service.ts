
// auth.service.ts
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import firebase from 'firebase/app'
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user?: Observable<firebase.User | null>;

  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = firebaseAuth.authState;
  }

  signup(email: string, password: string) {
    this.firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });
  }

  login(email: string, password: string) {
    let token = "";
    this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        value.user?.getIdToken().then(function(idToken) {
          token = idToken;
          localStorage.setItem("token", token);
        }) ;
        this.router.navigate(['dashboard']);
        console.log('Nice, it worked!');
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });
  }

  isLoggedIn() {
    if (localStorage.getItem("token")) {
      return true;
    }    
    return false;
  }

  logout() {
    this.firebaseAuth.signOut();
    localStorage.removeItem("token");
    this.router.navigate(['']);
  }
}

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private authservice: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let logged = this.authservice.isLoggedIn();

    if(logged) {
      
      return true;
    }
    this.router.navigate(['']);
    
    return false;
  }

  
}