import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";

@Injectable
export interface CanDeactivateComponent {
  canDeactivate(): Observable<boolean>;
}
