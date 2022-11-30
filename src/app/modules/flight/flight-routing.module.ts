import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightMainComponent } from 'src/app/modules/flight/flight-main/flight-main.component';
import { HomeComponent } from 'src/app/modules/home/home/home.component';

const routes: Routes = [
    {
        path:'',
        component:FlightMainComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightRoutingModule { }