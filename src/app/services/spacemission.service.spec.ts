import { TestBed } from '@angular/core/testing';

import { SpacemissionService } from './spacemission.service';

describe('SpacemissionService', () => {
  let service: SpacemissionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpacemissionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
