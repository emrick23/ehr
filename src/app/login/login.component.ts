import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
admin_email:any="admin@gmail.com"
admin_pass:any="admin"
doctor_email:any="doctor@gmail.com"
doctor_pass:any="doctor"
patient_email:any="patient@gmail.com"
patient_pass:any="patient"
  constructor() { }

  ngOnInit(): void {

  }

  

}
