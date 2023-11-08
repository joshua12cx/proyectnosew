import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarEmpleadoComponent } from './ActualizarEmpleadoComponent';

describe('ActualizarEmpleadoComponent', () => {
  let component: ActualizarEmpleadoComponent;
  let fixture: ComponentFixture<ActualizarEmpleadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarEmpleadoComponent]
    });
    fixture = TestBed.createComponent(ActualizarEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
