import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityPipe } from './pipes/city.pipe';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import {LogFormatterService} from "logger-lib";
import {CustomLogFormatterService} from "./logging/custom-log-formatter.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CityPipe,
  ],
  exports: [
    CityPipe,
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
