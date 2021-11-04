import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { Artist } from "../../models/user";
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {

  user: Artist = {
    id: "",
    name: "Valdir",
    cpf: "",
    phone: "",
    email: "",
    password: "",
    about: "",
    age: 0,
  };

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  getUsername() {
  }

  logout() {
    this.authService.logout();
  }
}
