import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloNewpassComponent } from './modulo-newpass.component';

describe('ModuloNewpassComponent', () => {
  let component: ModuloNewpassComponent;
  let fixture: ComponentFixture<ModuloNewpassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModuloNewpassComponent]
    });
    fixture = TestBed.createComponent(ModuloNewpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
