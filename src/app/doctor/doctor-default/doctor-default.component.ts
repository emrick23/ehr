import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-default',
  templateUrl: './doctor-default.component.html',
  styleUrls: ['./doctor-default.component.scss']
})
export class DoctorDefaultComponent implements OnInit {
dash=true
patient=false
orde=false
profile=false
  constructor() { }

  ngOnInit(): void {
  }
showpatient(){
  this.dash=false;
  this.patient=true;
  this.orde=false
  this.profile=false
}

showdash(){
  this.dash=true;
  this.patient=false;
  this.orde=false
  this.profile=false

}
ordonance(){
  this.dash=false;
  this.patient=false;
  this.orde=true
  this.profile=false
}
profil(){
  this.dash=false;
  this.patient=false;
  this.orde=false
  this.profile=true
}
}
