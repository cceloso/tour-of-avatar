import { TestBed } from '@angular/core/testing';

import { BendingService } from './bending.service';

describe('BendingService', () => {
  let service: BendingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BendingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
