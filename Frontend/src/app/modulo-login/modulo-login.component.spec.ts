import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloLogin } from './modulo-login.component';

describe('ModuloLoginComponent', () => {
  let component: ModuloLogin;
  let fixture: ComponentFixture<ModuloLogin>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModuloLogin]
    });
    fixture = TestBed.createComponent(ModuloLogin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
