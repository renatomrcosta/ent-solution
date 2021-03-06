import { Component, OnInit } from '@angular/core';
import {AirportService} from "@flight-workspace/flight-api";

@Component({
  selector: 'airport',
  templateUrl: './airport.component.html',
  styleUrls: ['./airport.component.css']
})
export class AirportComponent implements OnInit {

  private airports: string[] = [];

  constructor(
    private airportService: AirportService) {
  }

  ngOnInit() {
    this.fetchAirports();
  }

  private fetchAirports() {
    return this.airportService.findAll().subscribe( airports => {
      this.airports = airports;
      }
    );
  }
}
