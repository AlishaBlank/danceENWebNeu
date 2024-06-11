import { TestBed } from '@angular/core/testing';

import { AuthorizationService } from 'C:/Users/lisha/source/repos/danceENWebNeu/src/app/shared/authorization-service.service';

describe('AuthorizationServiceService', () => {
  let service: AuthorizationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorizationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
