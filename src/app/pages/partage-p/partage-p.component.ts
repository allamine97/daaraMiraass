import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-partage-p',
  templateUrl: './partage-p.component.html',
  styleUrls: ['./partage-p.component.css']
})
export class PartagePComponent implements OnInit {
  etap=0;
  form : FormGroup;
  constructor() { }

  ngOnInit(): void {
    
    this.initForm();
  
  }
  
  initForm() {
    this.form = new FormGroup({
    genre: new FormControl(),
    nbreFemme: new FormControl(),
    esmarie: new FormControl(),
    presencepere: new FormControl(),
    presenceGpere: new FormControl(),
    fils:new FormControl(),
    petitFils: new FormControl(),
    frereGermain: new FormControl(),
    frereConSanguin: new FormControl(),
    neveuxGermain: new FormControl(),
    neveuxConsanguin: new FormControl(),
    oncleParternelGermain: new FormControl(),
    oncleParternelConsanguin: new FormControl(),
    cousinPaternelGermain: new FormControl(),
    cousinPaternelConSanguin: new FormControl()

  });

  }

 etape(a){
   this.etap=a
 }




  
  
}
