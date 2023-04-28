import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XantchaComponent } from './xantcha.component';

describe('XantchaComponent', () => {
  let component: XantchaComponent;
  let fixture: ComponentFixture<XantchaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XantchaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XantchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
