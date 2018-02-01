import {Injectable} from "@angular/core";
import {OAuthService} from "angular-oauth2-oidc";

@Injectable()
export class AuthService {
  userName: string;

  constructor(private oauthService: OAuthService){}

  login(login:string, password:string) {
    this.oauthService.initImplicitFlow();
  }

  logout(){
    this.oauthService.logOut();
  }

}
