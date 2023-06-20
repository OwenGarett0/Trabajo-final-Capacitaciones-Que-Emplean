import { TestBed } from '@angular/core/testing';

import { ModuloAuthService } from './modulo-auth.service';

describe('ModuloAuthService', () => {
  let service: ModuloAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModuloAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
