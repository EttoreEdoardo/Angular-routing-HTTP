import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoccoComponent } from './rocco.component';

describe('RoccoComponent', () => {
  let component: RoccoComponent;
  let fixture: ComponentFixture<RoccoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoccoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoccoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
