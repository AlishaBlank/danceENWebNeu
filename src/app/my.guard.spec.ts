import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { MyGuard } from './my.guard';

describe('myGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => MyGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
