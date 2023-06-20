import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloInfoComponent } from './modulo-info.component';

describe('ModuloInfoComponent', () => {
  let component: ModuloInfoComponent;
  let fixture: ComponentFixture<ModuloInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModuloInfoComponent]
    });
    fixture = TestBed.createComponent(ModuloInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
