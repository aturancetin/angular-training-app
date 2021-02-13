import { Todo } from './../../models/Todo';
import { TodosService } from './../../service/todos.service';
import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {Chart} from 'chart.js';





@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  todos!: Todo[];
  completed!: number;
  uncompleted!: number;
  email!: string;
  password!: string;
  loadingIndicator?: boolean = true;
  chartIndicator?: boolean = false;
  
  constructor(public authService: AuthService, router: Router, private todosService:TodosService) {
    
    if(!authService.user) {
      router.navigate(['signup']);
    }
   }

  ngOnInit(): void {
    this.todosService.getCompleted().subscribe(todos => {
      
      this.todos = todos;
      this.completed = this.todos.length ;
    });
    this.todosService.getUncompleted().subscribe(todos => {
      
      this.todos = todos;
      this.uncompleted = this.todos.length ;
    });

    setTimeout(() => {

      var myChart = new Chart('myChart', {
        type: 'bar',
        data: {
          labels: ['Completed', 'Not Completed'],
          datasets: [{
              label: '# of Todos',
              data: [this.completed, this.uncompleted],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
      });

      var myChart1 = new Chart('myChart1', {
        type: 'pie',
        data: {
          labels: ['Completed', 'Not Completed'],
          datasets: [{
              label: '# of Todos',
              data: [this.completed, this.uncompleted],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
      });

      var myChart2 = new Chart('myChart2', {
        type: 'pie',
        data: {
          labels: ['Completed', 'Not Completed'],
          datasets: [{
              label: '# of Todos',
              data: [this.completed, this.uncompleted],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
      });

      var myChart3 = new Chart('myChart3', {
        type: 'bar',
        data: {
          labels: ['Completed', 'Not Completed'],
          datasets: [{
              label: '# of Todos',
              data: [this.completed, this.uncompleted],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
      });
      
      this.loadingIndicator = false;
      this.chartIndicator = true;
    },3000)
  }
}
