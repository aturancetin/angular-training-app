import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  
  todosUrl:string = 'https://jsonplaceholder.typicode.com/todos';
  

  constructor(private http:HttpClient) { }

  getTodos():Observable<Todo[]> {
    
    return this.http.get<Todo[]>(`${this.todosUrl}`);
  }

  getCompleted():Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrl}?completed=true`);
  }
  
}
