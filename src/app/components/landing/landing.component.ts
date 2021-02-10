import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';


@Component({
  selector: 'app-landing',
  template: `
    <ng-lottie [styles]="styles" width="27em" [options]="options" (animationCreated)="animationCreated($event)"></ng-lottie>
  `,
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  options: AnimationOptions = {
    path: '/assets/landing.json',
  }
  styles: Partial<CSSStyleDeclaration> = {
    maxWidth: '500px',

  };

  constructor() { }

  ngOnInit(): void {
  }
  animationCreated(animationItem: AnimationItem): void {
    
  }

}
