import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Consulta8Component } from './consulta8.component';

describe('Consulta8Component', () => {
  let component: Consulta8Component;
  let fixture: ComponentFixture<Consulta8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Consulta8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Consulta8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
