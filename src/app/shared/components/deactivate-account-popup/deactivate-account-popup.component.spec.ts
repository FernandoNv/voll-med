import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeactivateAccountPopupComponent } from './deactivate-account-popup.component';

describe('DeactivateAccountPopupComponent', () => {
  let component: DeactivateAccountPopupComponent;
  let fixture: ComponentFixture<DeactivateAccountPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeactivateAccountPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeactivateAccountPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
