import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloEstadisticaComponent } from './modulo-estadistica.component';

describe('ModuloEstadisticaComponent', () => {
  let component: ModuloEstadisticaComponent;
  let fixture: ComponentFixture<ModuloEstadisticaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModuloEstadisticaComponent]
    });
    fixture = TestBed.createComponent(ModuloEstadisticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
