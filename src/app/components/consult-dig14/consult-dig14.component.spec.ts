import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultDig14Component } from './consult-dig14.component';

describe('ConsultDig14Component', () => {
  let component: ConsultDig14Component;
  let fixture: ComponentFixture<ConsultDig14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultDig14Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultDig14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
