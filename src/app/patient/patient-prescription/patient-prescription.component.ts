import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-prescription',
  templateUrl: './patient-prescription.component.html',
  styleUrls: ['./patient-prescription.component.scss']
})
export class PatientPrescriptionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   showModal() {
    var modal:any = document.getElementById('modal');
    modal.style.display = "block";
}
closeModal() {
  var modal:any = document.getElementById('modal');
  modal.style.display = "none";
}
}
