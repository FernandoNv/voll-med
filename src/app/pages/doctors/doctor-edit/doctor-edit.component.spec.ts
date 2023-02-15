import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorEditComponent } from './doctor-edit.component';

describe('DoctorEditComponent', () => {
  let component: DoctorEditComponent;
  let fixture: ComponentFixture<DoctorEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DoctorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
