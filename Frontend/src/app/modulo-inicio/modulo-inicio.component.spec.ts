import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloInicio } from './modulo-inicio.component';

describe('ModuloInicioComponent', () => {
  let component: ModuloInicio;
  let fixture: ComponentFixture<ModuloInicio>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModuloInicio]
    });
    fixture = TestBed.createComponent(ModuloInicio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
