import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { Artist } from "../../models/user";
import { JwtHelperService } from '@auth0/angular-jwt';
import { LocalUserService } from '../../services/local-user.service';

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {

  user: Artist = {
    id: "",
    name: "",
    cpf: "",
    phone: "",
    email: "",
    password: "",
    about: "",
    age: 0,
  };

  constructor(
    private authService: AuthService,
    private localUserService: LocalUserService
    ) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.user = this.localUserService.getLocalUser();
  }

  logout() {
    this.authService.logout();
  }
}
