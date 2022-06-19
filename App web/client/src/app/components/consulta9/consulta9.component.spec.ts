import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Consulta9Component } from './consulta9.component';

describe('Consulta9Component', () => {
  let component: Consulta9Component;
  let fixture: ComponentFixture<Consulta9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Consulta9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Consulta9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
