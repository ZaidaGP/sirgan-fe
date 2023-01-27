import { TestBed } from '@angular/core/testing';

import { SirganApiService } from './sirgan-api.service';

describe('UsersApiService', () => {
  let service: SirganApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SirganApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
