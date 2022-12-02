import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'find-flight',
  templateUrl: './find-flight.component.html',
  styleUrls: ['./find-flight.component.scss']
})
export class FindFlightComponent implements OnInit {
  model: NgbDateStruct | undefined;

  tripForm=new FormGroup({
    from:new FormControl('BOM',Validators.required),
    to:new FormControl('DEL',Validators.required),
    depart:new FormControl({year:2022,month:2,day:8},Validators.required),
    return:new FormControl({year:2022,month:10,day:28},Validators.required),
  })
  constructor() { }

  ngOnInit(): void {
  }

}
