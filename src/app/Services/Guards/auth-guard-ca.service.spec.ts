import { TestBed } from '@angular/core/testing';

import { AuthGuardCaService } from './auth-guard-ca.service';

describe('AuthGuardCaService', () => {
  let service: AuthGuardCaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuardCaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
