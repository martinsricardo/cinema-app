import { TestBed } from '@angular/core/testing';

import { FunctionsService } from './functions.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('FunctionsService', () => {
  let service: FunctionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientModule] });
    service = TestBed.inject(FunctionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
