import { TestBed } from '@angular/core/testing';

import { PhysicanService } from './physican.service';

describe('PhysicanService', () => {
  let service: PhysicanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhysicanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
