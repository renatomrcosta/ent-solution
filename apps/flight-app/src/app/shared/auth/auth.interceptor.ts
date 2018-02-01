import {Injectable} from "@angular/core";
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {catchError} from "rxjs/operators";
import {_throw} from "rxjs/observable/throw";
import {Router} from "@angular/router";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
  constructor(private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(req.url.startsWith('http://www.angular.at')){
      let headers = req.headers.set('Authorization', 'Test test bananinha');
      req = req.clone({headers});
    }
    return next.handle(req).pipe(catchError(error => this.handleError(error)));
  }

  private handleError(error: HttpErrorResponse) {
    if(error.status === 401 || error.status === 403){
      this.router.navigate(['/home', {needsLogin: true}]);
    }
    return _throw(error);
  }
}
