import { TestBed } from '@angular/core/testing';

import { FeaturesProviderService } from './features-provider.service';

describe('FeaturesProviderService', () => {
  let service: FeaturesProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeaturesProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
