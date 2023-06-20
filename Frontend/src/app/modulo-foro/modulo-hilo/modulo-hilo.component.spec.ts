import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloHiloComponent } from './modulo-hilo.component';

describe('ModuloHiloComponent', () => {
  let component: ModuloHiloComponent;
  let fixture: ComponentFixture<ModuloHiloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModuloHiloComponent]
    });
    fixture = TestBed.createComponent(ModuloHiloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
