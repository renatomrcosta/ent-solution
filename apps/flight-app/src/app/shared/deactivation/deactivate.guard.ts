import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from "@angular/router";
import {CanDeactivateComponent} from "./can-deactivate-component";
import {Observable} from "rxjs/Observable";

@Injectable()
export class DeactivateGuard implements CanDeactivate<CanDeactivateComponent> {

  canDeactivate(component: CanDeactivateComponent,
                currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot,
                nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return undefined;
  }

}
