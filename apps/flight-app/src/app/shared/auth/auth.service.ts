import {Injectable} from "@angular/core";

@Injectable()
export class AuthService {
  userName: string;

  constructor(){}

  login(login:string, password:string) {
    if(login === 'Bananinha' && password === 'asd'){
      this.userName = "Bananinha";
    } else {
      this.logout();
    }
  }

  logout(){
    this.userName = null;
  }

}
