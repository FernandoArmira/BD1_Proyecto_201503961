import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Consulta6Component } from './consulta6.component';

describe('Consulta6Component', () => {
  let component: Consulta6Component;
  let fixture: ComponentFixture<Consulta6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Consulta6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Consulta6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
