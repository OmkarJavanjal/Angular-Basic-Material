import { TestBed, async, inject } from '@angular/core/testing';

import { RoutingGuardGuard } from './routing-guard.guard';

describe('RoutingGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoutingGuardGuard]
    });
  });

  it('should ...', inject([RoutingGuardGuard], (guard: RoutingGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
