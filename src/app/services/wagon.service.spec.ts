import { TestBed } from '@angular/core/testing';

import { WagonService } from './wagon.service';

describe('WagonService', () => {
  let service: WagonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WagonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
