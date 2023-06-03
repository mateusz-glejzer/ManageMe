import { TestBed } from '@angular/core/testing';

import { ProjectInfoProviderService } from './project-info-provider.service';

describe('ProjectInfoProviderService', () => {
  let service: ProjectInfoProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectInfoProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
