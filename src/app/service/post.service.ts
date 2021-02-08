import { Post } from './../models/Post';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postsUrl:string = 'https://jsonplaceholder.typicode.com/posts';
  postsLimit = '?_limit=20';

  constructor(private http: HttpClient) { 
    
  }

   getPosts():Observable<Post[]> {
    return this.http.get<Post[]>(`${this.postsUrl}${this.postsLimit}`);
  }
}
