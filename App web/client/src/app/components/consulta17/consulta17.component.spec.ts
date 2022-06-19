import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Consulta17Component } from './consulta17.component';

describe('Consulta17Component', () => {
  let component: Consulta17Component;
  let fixture: ComponentFixture<Consulta17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Consulta17Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Consulta17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
