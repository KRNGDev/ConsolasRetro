import { TestBed } from '@angular/core/testing';

import { ConsolaserviceService } from './consolaservice.service';

describe('ConsolaserviceService', () => {
  let service: ConsolaserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsolaserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
