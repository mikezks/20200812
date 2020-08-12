import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightSearchComponent } from './container/flight-search/flight-search.component';

const routes: Routes = [
  {
    path: 'flight-booking',
    children: [
      {
        path: 'flight-search',
        component: FlightSearchComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightBookingRoutingModule { }
