import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorMedicalPrescriptionComponent } from './doctor-medical-prescription.component';

describe('DoctorMedicalPrescriptionComponent', () => {
  let component: DoctorMedicalPrescriptionComponent;
  let fixture: ComponentFixture<DoctorMedicalPrescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorMedicalPrescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorMedicalPrescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
