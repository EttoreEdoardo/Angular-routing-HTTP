import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlementComponent } from './klement.component';

describe('KlementComponent', () => {
  let component: KlementComponent;
  let fixture: ComponentFixture<KlementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KlementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KlementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
