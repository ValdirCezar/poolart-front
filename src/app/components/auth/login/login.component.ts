import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { FormControl, Validators } from "@angular/forms";
import { Credentials } from "../../../models/credentials";
import { AuthService } from "../../../services/auth.service";
import { Router } from "@angular/router";
import { ArtistService } from "src/app/services/artist.service";
import { LocalUserService } from "../../../services/local-user.service";
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  jwtService: JwtHelperService = new JwtHelperService();

  creds: Credentials = {
    email: "valdir@mail.com",
    password: "123",
  };

  constructor(
    private toast: ToastrService,
    private service: AuthService,
    private router: Router,
    private artistService: ArtistService,
    private localUserService: LocalUserService
  ) {}

  email: FormControl = new FormControl(null, Validators.email);
  password: FormControl = new FormControl(null, [
    Validators.minLength(3),
    Validators.maxLength(50),
  ]);

  ngOnInit(): void {}

  login() {
    this.service.authenticate(this.creds).subscribe(
      (resposta) => {
        this.service.successfulLogin(
          resposta.headers.get("Authorization").substring(7)
        );
        const email = this.jwtService.decodeToken(
          localStorage.getItem("token")
        ).sub;
        if (email != null) {
          this.artistService.getByEmail(email).subscribe((res) => {
            this.localUserService.setLocalArtist(res);
            this.router.navigate(["../dashboard/home"]);
          });
        }
      },
      () => {
        this.toast.error("Usuário e/ou senha inválidos");
      }
    );
  }

  validFields(): boolean {
    if (this.email.invalid) {
      this.toast.warning("O campo E-MAIL deve ser preenchido", "E-MAIL");
      return false;
    } else if (this.password.invalid) {
      this.toast.warning("O campo SENHA deve entre 6 e 50 caracteres", "SENHA");
      return false;
    }
    return true;
  }
}
