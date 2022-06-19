import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Consulta7Component } from './consulta7.component';

describe('Consulta7Component', () => {
  let component: Consulta7Component;
  let fixture: ComponentFixture<Consulta7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Consulta7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Consulta7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
