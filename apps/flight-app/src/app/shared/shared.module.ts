import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityPipe } from './pipes/city.pipe';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import {LogFormatterService} from "logger-lib";
import {CustomLogFormatterService} from "./logging/custom-log-formatter.service";
import {AuthService} from "./auth/auth.service";
import {AuthGuard} from "./auth/auth.guard";
import {DeactivateGuard} from "./deactivation/deactivate.guard";
import {AuthInterceptor} from "./auth/auth.interceptor";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthConfig} from "angular-oauth2-oidc";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CityPipe,
  ],
  exports: [
    CityPipe,
    AuthConfig
  ],
  providers: [
    AuthService,
    AuthGuard,
    DeactivateGuard
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        {
          provide: LogFormatterService,
          useClass: CustomLogFormatterService
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true
        }
      ]
    }
  }

  static forChild(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    }
  }

}
