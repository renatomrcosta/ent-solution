import {Injectable} from "@angular/core";

@Injectable()
export class AuthService {
  userName: string;

  constructor(){}

  login() {
    this.userName = "Bananinha";
  }

  logout(){
    this.userName = null;
  }

}
