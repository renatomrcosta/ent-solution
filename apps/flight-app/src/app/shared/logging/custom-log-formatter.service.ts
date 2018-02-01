import {LogFormatterService} from "logger-lib";

export class CustomLogFormatterService implements LogFormatterService{
  format(message: string): string {
    const now = new Date().toISOString();
    return `[${now}] ${message}`;
  }

}
