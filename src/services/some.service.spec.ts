import { TestBed } from '@angular/core/testing';

import { SomeService } from './some.service';

describe('SomeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    // const service: SomeService = TestBed.get(SomeService);
    const service = new SomeService(null);
    expect(service).toBeTruthy();
  });
});
