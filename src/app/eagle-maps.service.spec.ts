import { TestBed } from '@angular/core/testing';

import { EagleMapsService } from './eagle-maps.service';

describe('EagleMapsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EagleMapsService = TestBed.get(EagleMapsService);
    expect(service).toBeTruthy();
  });
});
