import {Injectable} from "@angular/core";
import {LogFormatterService} from "logger-lib";

@Injectable()
export class CustomLogFormatterService implements LogFormatterService{

  constructor() {
    console.log("here is custom");
  }

  format(message: string): string {
    const now = new Date().toISOString();
    return `[${now}] ${message}`;
  }

}
