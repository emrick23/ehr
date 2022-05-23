import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
dash=true
orde=false
setting=false
  constructor() { }

  ngOnInit(): void {
  }

  showdash(){
    this.dash=true
    this.orde=false
    this.setting=false
  }
  showorde(){
    this.dash=false
    this.orde=true
    this.setting=false
  }
  showsetting(){
    this.dash=false
    this.orde=false
    this.setting=true
  }

}
