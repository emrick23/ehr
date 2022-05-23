import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AccueilComponent } from './accueil/accueil.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:"login", component:AccueilComponent},
  {path:"",
  redirectTo:'login',
  pathMatch:"full"},
  {path:'register', component:RegisterComponent},
  {path:"login", component:LoginComponent},
  {path:'dashboard',loadChildren:()=>import("./doctor/doctor.module").then(d=>d.DoctorModule)},
  {path:'dashboard',loadChildren:()=> import("./patient/patient.module").then(d=>d.PatientModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
