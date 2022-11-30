import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightMainComponent } from './flight-main/flight-main.component';

import { FlightRoutingModule } from 'src/app/modules/flight/flight-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    FlightMainComponent
  ],
  imports: [
    CommonModule,
    FlightRoutingModule,
    SharedModule
  ]
})
export class FlightModule { }
