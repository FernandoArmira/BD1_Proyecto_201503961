import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Consulta18Component } from './consulta18.component';

describe('Consulta18Component', () => {
  let component: Consulta18Component;
  let fixture: ComponentFixture<Consulta18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Consulta18Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Consulta18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
