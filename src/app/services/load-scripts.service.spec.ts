import { TestBed, inject } from '@angular/core/testing';

import { LoadScriptsService } from './load-scripts.service';

describe('LoadScriptsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadScriptsService]
    });
  });

  it('should be created', inject([LoadScriptsService], (service: LoadScriptsService) => {
    expect(service).toBeTruthy();
  }));
});
