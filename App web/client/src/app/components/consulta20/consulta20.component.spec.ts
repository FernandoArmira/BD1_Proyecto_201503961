import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Consulta20Component } from './consulta20.component';

describe('Consulta20Component', () => {
  let component: Consulta20Component;
  let fixture: ComponentFixture<Consulta20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Consulta20Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Consulta20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
