import { TestBed, inject } from '@angular/core/testing';

import { IpAddressService } from './ip-address.service';

describe('IpAddressService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IpAddressService]
    });
  });

  it('should be created', inject([IpAddressService], (service: IpAddressService) => {
    expect(service).toBeTruthy();
  }));
});
