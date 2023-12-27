import { TestBed } from '@angular/core/testing';

import { DigiLockerService } from './digi-locker.service';

describe('DigiLockerService', () => {
  let service: DigiLockerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DigiLockerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
