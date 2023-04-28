import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HallarComponent } from './hallar.component';

describe('HallarComponent', () => {
  let component: HallarComponent;
  let fixture: ComponentFixture<HallarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HallarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HallarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
