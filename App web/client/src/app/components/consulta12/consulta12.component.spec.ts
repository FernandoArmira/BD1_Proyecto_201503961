import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Consulta12Component } from './consulta12.component';

describe('Consulta12Component', () => {
  let component: Consulta12Component;
  let fixture: ComponentFixture<Consulta12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Consulta12Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Consulta12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
