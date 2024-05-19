import { TestBed } from '@angular/core/testing';

import { LogoffService } from './logoff.service';

describe('LogoffService', () => {
  let service: LogoffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogoffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
