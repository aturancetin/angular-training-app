import { Todo } from './../../models/Todo';
import { TodosService } from './../../service/todos.service';
import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  todos!: Todo[];
  completed!: number;
  email!: string;
  password!: string;
  constructor(public authService: AuthService, router: Router, private todosService:TodosService) {
    
    if(!authService.user) {
      router.navigate(['signup']);
    }
   }

  ngOnInit(): void {
    this.todosService.getCompleted().subscribe(todos => {
      this.todos = todos;
      this.completed = this.todos.length;
    });
    
  }

}
