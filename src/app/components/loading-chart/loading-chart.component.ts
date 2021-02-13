import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-loading-chart',
  template: `
    <ng-lottie [styles]="styles" width="10em" [options]="options" (animationCreated)="animationCreated($event)"></ng-lottie>
  `,
  styleUrls: ['./loading-chart.component.css']
})
export class LoadingChartComponent implements OnInit {

  options: AnimationOptions = {
    path: '/assets/loadingChart.json',
  }
  styles: Partial<CSSStyleDeclaration> = {
    maxWidth: '50vw',
    minWidth: '20em',
    margin: '0 auto',
    opacity: '0.5',
  };


  constructor() { }

  ngOnInit(): void {
    
  }
  animationCreated(animationItem: AnimationItem): void {
    
  }
}
