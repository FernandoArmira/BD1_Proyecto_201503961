import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Consulta19Component } from './consulta19.component';

describe('Consulta19Component', () => {
  let component: Consulta19Component;
  let fixture: ComponentFixture<Consulta19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Consulta19Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Consulta19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
