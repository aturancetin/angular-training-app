import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickLottieComponent } from './click-lottie.component';

describe('ClickLottieComponent', () => {
  let component: ClickLottieComponent;
  let fixture: ComponentFixture<ClickLottieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClickLottieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickLottieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
