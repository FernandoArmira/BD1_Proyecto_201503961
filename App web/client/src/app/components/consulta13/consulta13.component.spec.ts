import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Consulta13Component } from './consulta13.component';

describe('Consulta13Component', () => {
  let component: Consulta13Component;
  let fixture: ComponentFixture<Consulta13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Consulta13Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Consulta13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
