import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Consulta10Component } from './consulta10.component';

describe('Consulta10Component', () => {
  let component: Consulta10Component;
  let fixture: ComponentFixture<Consulta10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Consulta10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Consulta10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
