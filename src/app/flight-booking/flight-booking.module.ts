import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { FlightBookingRoutingModule } from './flight-booking-routing.module';
import { FlightSearchComponent } from './container/flight-search/flight-search.component';
import { FlightCardComponent } from './components/flight-card/flight-card.component';
import { FlightEditComponent } from './container/flight-edit/flight-edit.component';

@NgModule({
  declarations: [
    FlightSearchComponent,
    FlightEditComponent,
    FlightCardComponent
  ],
  imports: [
    CommonModule,
    FlightBookingRoutingModule,
    SharedModule
  ],
  exports: [
    //FlightSearchComponent
  ]
})
export class FlightBookingModule { }
