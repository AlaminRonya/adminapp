import { TestBed } from '@angular/core/testing';

import { TaxClassServiceService } from './tax-class-service.service';

describe('TaxClassServiceService', () => {
  let service: TaxClassServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaxClassServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
