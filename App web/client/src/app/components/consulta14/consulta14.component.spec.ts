import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Consulta14Component } from './consulta14.component';

describe('Consulta14Component', () => {
  let component: Consulta14Component;
  let fixture: ComponentFixture<Consulta14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Consulta14Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Consulta14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
