import { TestBed } from '@angular/core/testing';

import { AlertModalServiceService } from './alert-modal-service.service';

describe('AlertModalServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlertModalServiceService = TestBed.get(AlertModalServiceService);
    expect(service).toBeTruthy();
  });
});
