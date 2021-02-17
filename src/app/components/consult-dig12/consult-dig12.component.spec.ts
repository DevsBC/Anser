import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultDig12Component } from './consult-dig12.component';

describe('ConsultDig12Component', () => {
  let component: ConsultDig12Component;
  let fixture: ComponentFixture<ConsultDig12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultDig12Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultDig12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
