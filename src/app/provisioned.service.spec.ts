import { TestBed, inject } from '@angular/core/testing';

import { ProvisionedService } from './provisioned.service';

describe('ProvisionedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProvisionedService]
    });
  });

  it('should be created', inject([ProvisionedService], (service: ProvisionedService) => {
    expect(service).toBeTruthy();
  }));
});
