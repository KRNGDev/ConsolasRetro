import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ConsolaserviceService } from './consolaservice.service';

describe('ConsolaserviceService', () => {
  let service: ConsolaserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ConsolaserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
