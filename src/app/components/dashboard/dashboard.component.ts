import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { Artist } from "../../models/user";
import { LocalUserService } from "../../services/local-user.service";
import { MatDialog } from "@angular/material/dialog";
import { FileUploadComponent } from "../file-upload/file-upload.component";

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
    private dialog: MatDialog
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

  getUserId() {
    return this.localUserService.getLocalUser().id;
  }

  alterImage(): void {
    this.dialog.open(FileUploadComponent);
  }
}
