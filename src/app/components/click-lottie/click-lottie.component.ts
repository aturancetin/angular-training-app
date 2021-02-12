import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';


@Component({
  selector: 'app-click-lottie',
  template: `
    <ng-lottie [styles]="styles" width="6em" [options]="options" (animationCreated)="animationCreated($event)"></ng-lottie>
  `,
  styleUrls: ['./click-lottie.component.css']
})
export class ClickLottieComponent implements OnInit {

  options: AnimationOptions = {
    path: '/assets/click_lottie.json',
  }
  styles: Partial<CSSStyleDeclaration> = {
    maxWidth: '50vw',
    minWidth: '5em',
    margin: '0 auto',
  };

  constructor() { }

  ngOnInit(): void {
  }

  animationCreated(animationItem: AnimationItem): void {
    
  }

}
