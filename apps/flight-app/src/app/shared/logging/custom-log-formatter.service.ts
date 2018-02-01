import {LogFormatterService} from "logger-lib";

export class CustomLogFormatterService implements LogFormatterService{
  format(message: string): string {
    return undefined;
  }

}
