import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloRegistroComponent } from './modulo-registro.component';

describe('ModuloRegistroComponent', () => {
  let component: ModuloRegistroComponent;
  let fixture: ComponentFixture<ModuloRegistroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModuloRegistroComponent]
    });
    fixture = TestBed.createComponent(ModuloRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
