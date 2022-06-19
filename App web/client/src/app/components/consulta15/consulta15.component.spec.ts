import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Consulta15Component } from './consulta15.component';

describe('Consulta15Component', () => {
  let component: Consulta15Component;
  let fixture: ComponentFixture<Consulta15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Consulta15Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Consulta15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
