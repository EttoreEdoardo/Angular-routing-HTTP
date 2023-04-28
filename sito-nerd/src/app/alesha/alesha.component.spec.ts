import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AleshaComponent } from './alesha.component';

describe('AleshaComponent', () => {
  let component: AleshaComponent;
  let fixture: ComponentFixture<AleshaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AleshaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AleshaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
