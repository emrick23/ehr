import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DefaultComponent } from './default/default.component';
import { SettingComponent } from './setting/setting.component';
import { PatientPrescriptionComponent } from './patient-prescription/patient-prescription.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DefaultComponent,
    SettingComponent,
    PatientPrescriptionComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule
  ]
})
export class PatientModule { }
