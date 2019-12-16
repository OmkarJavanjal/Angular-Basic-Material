import { TestBed, inject } from '@angular/core/testing';

import { HeightserviceService } from './heightservice.service';

describe('HeightserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeightserviceService]
    });
  });

  it('should be created', inject([HeightserviceService], (service: HeightserviceService) => {
    expect(service).toBeTruthy();
  }));
});
