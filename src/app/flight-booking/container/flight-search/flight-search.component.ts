import { Component, OnInit } from '@angular/core';
import { Flight } from '../../../entities/flight';
import { FlightService } from '../../services/flight.service';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {
  from = 'Hamburg';
  to = 'Graz';
  flights: Flight[];
  basket: object = {
    "3": true,
    "5": true
  };

  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
  }

  search(): void {
    this.flightService
        .find(this.from, this.to)
        .subscribe(
            (flights: Flight[]) => {
                this.flights = flights;
            },
            errResp => console.error('Error loading flights', errResp)
        );
  }
}
