import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Consulta16Component } from './consulta16.component';

describe('Consulta16Component', () => {
  let component: Consulta16Component;
  let fixture: ComponentFixture<Consulta16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Consulta16Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Consulta16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
