import { TestBed } from '@angular/core/testing';

import { AlertModalService } from './alert-modal.service';

describe('AlertModalServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlertModalService = TestBed.get(AlertModalService);
    expect(service).toBeTruthy();
  });
});
