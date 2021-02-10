import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';




@Component({
  selector: 'app-loading',
  template: `
    <ng-lottie [styles]="styles" width="500px" [options]="options" (animationCreated)="animationCreated($event)"></ng-lottie>
  `,
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
  options: AnimationOptions = {
    path: '/assets/loading.json',
  }
  styles: Partial<CSSStyleDeclaration> = {
    maxWidth: '50vw',
    minWidth: '20em',
    margin: '0 auto',
  };

  constructor() { }

  ngOnInit(): void {
  }
  animationCreated(animationItem: AnimationItem): void {
    
  }

}
