import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityPipe } from './pipes/city.pipe';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import {LogFormatterService} from "logger-lib";
import {CustomLogFormatterService} from "./logging/custom-log-formatter.service";
import {AuthService} from "./auth/auth.service";
import {AuthGuard} from "./auth/auth.guard";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CityPipe,
  ],
  exports: [
    CityPipe,
  ],
  providers: [
    AuthService,
    AuthGuard
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
