import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightMainComponent } from './flight-main/flight-main.component';

import { FlightRoutingModule } from 'src/app/modules/flight/flight-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FindFlightComponent } from './find-flight/find-flight.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDatepickerModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    FlightMainComponent,
    FindFlightComponent
  ],
  imports: [
    CommonModule,
    FlightRoutingModule,
    SharedModule,
    FormsModule, 
    ReactiveFormsModule,
    NgbModule,
    NgbDatepickerModule,
 

  ]
})
export class FlightModule { }
