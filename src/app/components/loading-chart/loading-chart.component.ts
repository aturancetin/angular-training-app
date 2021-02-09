import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-loading-chart',
  template: `
    <ng-lottie [styles]="styles" width="500px" [options]="options" (animationCreated)="animationCreated($event)"></ng-lottie>
  `,
  styleUrls: ['./loading-chart.component.css']
})
export class LoadingChartComponent implements OnInit {

  options: AnimationOptions = {
    path: '/assets/loadingChart.json',
  }
  styles: Partial<CSSStyleDeclaration> = {
    maxWidth: '500px',
    margin: '0 auto',
  };


  constructor() { }

  ngOnInit(): void {
    
  }
  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
}