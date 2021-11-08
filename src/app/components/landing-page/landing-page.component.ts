import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { AboutComponent } from "../about/about.component";
import { ToastrService } from "ngx-toastr";
import { UserService } from "../../services/user.service";

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.css"],
})
export class LandingPageComponent implements OnInit {

  name: string = "";

  constructor(
    public dialog: MatDialog,
    private toast: ToastrService,
    private userService: UserService
  ) {}

  ngOnInit(): void {}

  openDialog(): void {
    const dialogRef = this.dialog.open(AboutComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  search(): void {
    this.findNumberOfUsersByName(this.name);
  }

  findNumberOfUsersByName(name: string): void {
    if (this.validFieldName(name)) {
      this.userService.findNumberOfUserByName(name).subscribe((res) => {
        if (res === 0) {
          this.noUsersNotFoundMessage();
        } else {
          this.numberOfUsersFounded(res);
        }
      });
    }
  }

  validFieldName(name: string): boolean {
    if (name === "") {
      this.toast.warning("Digite um nome ou CNPJ para realizar a pesquisa");
      return false;
    }
    return true;
  }

  noUsersNotFoundMessage(): void {
    this.toast.info(
      `Não encontramos pessoas ou empresas com esse nome :(`,
      "Listagem de pessoas/empresas",
      {
        progressBar: false,
        timeOut: 9000,
        positionClass: "toast-bottom-full-width",
      }
    );
  }

  numberOfUsersFounded(users: number): void {
    this.toast.success(
      `Encontramos ${users} pessoa(s) ou empresa(s) com esse nome. Realize o login para entrar em contato com elas`,
      "Listagem de pessoas/empresas",
      {
        progressBar: false,
        timeOut: 9000,
        positionClass: "toast-bottom-full-width",
      }
    );
  }
}
