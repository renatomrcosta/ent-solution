import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoggerService} from "logger-lib";


@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  constructor(private router: Router, private loggerService: LoggerService) {
    this.loggerService.log('ASD');
    this.loggerService.debug('bananinha');
  }
}

