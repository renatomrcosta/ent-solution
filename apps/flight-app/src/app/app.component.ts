import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoggerService} from "logger-lib";
import {TranslateService} from "@ngx-translate/core";


@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  constructor(private router: Router, private loggerService: LoggerService, private translateService : TranslateService) {
    this.loggerService.log('ASD');
    this.loggerService.debug('bananinha');
    this.translateService.addLangs(['en', 'de']);
    this.translateService.setDefaultLang('de');
    this.translateService.use('de');
  }
}

