import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloForoComponent } from './modulo-foro.component';

describe('ModuloForoComponent', () => {
  let component: ModuloForoComponent;
  let fixture: ComponentFixture<ModuloForoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModuloForoComponent]
    });
    fixture = TestBed.createComponent(ModuloForoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
