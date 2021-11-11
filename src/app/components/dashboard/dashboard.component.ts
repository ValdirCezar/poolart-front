import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { Artist } from "../../models/user";
import { LocalUserService } from '../../services/local-user.service';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';

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
    private localUserService: LocalUserService,
    private userService: UserService,
    private toast: ToastrService
    ) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    this.user = this.localUserService.getLocalUser();
  }

  logout(): void {
    this.authService.logout();
  }

  getUserImage() {
    const id = this.localUserService.getLocalUser().id;
    return `https://poolart.s3.amazonaws.com/cp${id}.jpg`;
  }

}
