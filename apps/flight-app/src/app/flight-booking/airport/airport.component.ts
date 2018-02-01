import { Component, OnInit } from '@angular/core';
import {AirportService} from "@flight-workspace/flight-api";

@Component({
  selector: 'airport',
  templateUrl: './airport.component.html',
  styleUrls: ['./airport.component.css']
})
export class AirportComponent implements OnInit {

  get airports() {
    return this.airportService.findAll();
  }

  constructor(
    private airportService: AirportService) {
  }

  ngOnInit() {
  }
}
