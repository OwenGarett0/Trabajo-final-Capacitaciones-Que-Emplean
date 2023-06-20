import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloListaHilosComponent } from './modulo-lista-hilos.component';

describe('ModuloListaHilosComponent', () => {
  let component: ModuloListaHilosComponent;
  let fixture: ComponentFixture<ModuloListaHilosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModuloListaHilosComponent]
    });
    fixture = TestBed.createComponent(ModuloListaHilosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
