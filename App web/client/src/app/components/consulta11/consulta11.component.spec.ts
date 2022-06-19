import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Consulta11Component } from './consulta11.component';

describe('Consulta11Component', () => {
  let component: Consulta11Component;
  let fixture: ComponentFixture<Consulta11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Consulta11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Consulta11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
