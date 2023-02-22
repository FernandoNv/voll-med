import { TestBed } from '@angular/core/testing';

import { DeactivateAccountPopupService } from './deactivate-account-popup.service';

describe('DeactivateAccountPopupService', () => {
  let service: DeactivateAccountPopupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeactivateAccountPopupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
