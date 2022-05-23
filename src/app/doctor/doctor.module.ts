import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { MedicalConsultationComponent } from './medical-consultation/medical-consultation.component';
import { PatientsComponent } from './patients/patients.component';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { DoctorMessagesComponent } from './doctor-messages/doctor-messages.component';
import { DoctorMedicalPrescriptionComponent } from './doctor-medical-prescription/doctor-medical-prescription.component';
import { DoctorDefaultComponent } from './doctor-default/doctor-default.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DoctorDashboardComponent,
    MedicalConsultationComponent,
    PatientsComponent,
    RendezVousComponent,
    DoctorProfileComponent,
    DoctorMessagesComponent,
    DoctorMedicalPrescriptionComponent,
    DoctorDefaultComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    SharedModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class DoctorModule { }
