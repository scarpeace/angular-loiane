import { TestBed } from '@angular/core/testing';

import { VerificaEmailServiceService } from './verifica-email-service.service';

describe('VerificaEmailServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VerificaEmailServiceService = TestBed.get(VerificaEmailServiceService);
    expect(service).toBeTruthy();
  });
});
