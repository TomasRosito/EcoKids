import { TestBed } from '@angular/core/testing';

import { EcoinsService } from './ecoins.service';

describe('EcoinsService', () => {
  let service: EcoinsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EcoinsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
