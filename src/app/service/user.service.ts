import { Observable } from 'rxjs';
import { User } from './../models/User';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersUrl: string = 'https://jsonplaceholder.typicode.com/users';


  constructor(private http: HttpClient) { }

  getUsers():Observable<User[]> {
    return this.http.get<User[]>(`${this.usersUrl}`);
  }
}
