import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoggerService} from "logger-lib";
import {TranslateService} from "@ngx-translate/core";
import {JwksValidationHandler, OAuthService} from "angular-oauth2-oidc";
import {authConfig} from "./auth.config";


@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  constructor(private router: Router,
              private loggerService: LoggerService,
              private translateService : TranslateService,
              private oauthService : OAuthService) {
    this.loggerService.log('ASD');
    this.loggerService.debug('bananinha');

    this.translateService.addLangs(['en', 'de']);
    this.translateService.setDefaultLang('de');
    this.translateService.use('de');

    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }
}

