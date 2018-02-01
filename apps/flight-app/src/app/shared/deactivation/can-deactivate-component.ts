import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";

@Injectable
export interface CanDeactivateComponent {
  CanDeactivate : Observable<boolean>;
}
