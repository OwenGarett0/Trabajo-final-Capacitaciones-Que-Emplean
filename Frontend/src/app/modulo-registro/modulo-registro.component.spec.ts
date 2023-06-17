import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloRegistro } from './modulo-registro.component';

describe('ModuloRegistroComponent', () => {
  let component: ModuloRegistro;
  let fixture: ComponentFixture<ModuloRegistro>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModuloRegistro]
    });
    fixture = TestBed.createComponent(ModuloRegistro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
