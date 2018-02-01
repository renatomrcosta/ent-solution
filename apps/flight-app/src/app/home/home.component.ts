import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import {AuthService} from "../shared/auth/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute, private authService: AuthService) { }

  needsLogin: boolean;
  login: string;
  password: string;

  ngOnInit() {
    this.needsLogin = !!this.route.snapshot.params['needsLogin'];
  }

  get userName(): string {
    return this.authService.userName;
  }

  doLogin(): void {
    this.authService.login(this.login, this.password);
  }

  doLogout(): void {
    this.authService.logout();
  }


}
