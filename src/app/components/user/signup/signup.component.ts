import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { cpf } from "cpf-cnpj-validator";
import { Artist } from "src/app/models/user";
import { ArtistService } from "src/app/services/artist.service";
import { Router } from "@angular/router";
import { FileUploadService } from "src/app/services/file-upload.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit {
  
  artist: Artist = {
    name: "",
    cpf: "",
    phone: "",
    email: "",
    password: "",
    about: "",
    age: 0,
    address: {
      id: "",
      cep: "",
      country: "",
      city: "",
      street: "",
      number: "",
    },
  };

  constructor(
    private toast: ToastrService,
    private service: ArtistService,
    private router: Router,
    private fileService: FileUploadService
  ) {}

  name: FormControl = new FormControl(null, Validators.required);
  cpf: FormControl = new FormControl(null, Validators.required);
  phone: FormControl = new FormControl(null, Validators.required);
  email: FormControl = new FormControl(null, Validators.email);
  password: FormControl = new FormControl(null, [
    Validators.minLength(5),
    Validators.maxLength(50),
  ]);
  age: FormControl = new FormControl(null, Validators.required);
  about: FormControl = new FormControl(null, Validators.required);
  cep: FormControl = new FormControl(null, Validators.required);
  country: FormControl = new FormControl(null, Validators.required);
  city: FormControl = new FormControl(null, Validators.required);
  street: FormControl = new FormControl(null, Validators.required);
  number: FormControl = new FormControl(null, Validators.required);

  ngOnInit(): void {}

  create(): void {
    if (this.validFields()) {
      this.service.create(this.artist).subscribe(
        () => {
          this.toast.success("Usuário cadastrado com sucesso!");
          this.router.navigate(["../"]);
        },
        (err) => {
          this.toast.error(err.error.message);
        }
      );
    }
  }

  validFields(): boolean {
    if (!cpf.isValid(this.artist.cpf)) {
      this.toast.warning("Digite um CPF válido", "CPF");
      return false;
    } else if (this.name.invalid) {
      this.toast.warning(
        "O campo NOME deve ter entre 3 e 50 caracteres",
        "Nome"
      );
      return false;
    } else if (this.phone.invalid) {
      this.toast.warning("O campo TELEFONE deve ser preenchido", "TELEFONE");
      return false;
    } else if (this.about.invalid) {
      this.toast.warning("O campo SOBRE deve ser preenchido", "SOBRE");
      return false;
    } else if (this.email.invalid) {
      this.toast.warning("O campo E-MAIL deve ser preenchido", "E-MAIL");
      return false;
    } else if (this.password.invalid) {
      this.toast.warning("O campo SENHA deve entre 6 e 50 caracteres", "SENHA");
      return false;
    } else if (this.age.invalid) {
      this.toast.warning("O campo IDADE deve ser preenchido", "IDADE");
      return false;
    } else if (this.cep.invalid) {
      this.toast.warning("O campo CEP deve ser preenchido", "CEP");
      return false;
    } else if (this.country.invalid) {
      this.toast.warning("O campo PAIS deve ser preenchido", "PAIS");
      return false;
    } else if (this.city.invalid) {
      this.toast.warning("O campo CIDADE deve ser preenchido", "CIDADE");
      return false;
    } else if (this.street.invalid) {
      this.toast.warning(
        "O campo LOGRADOURO deve ser preenchido",
        "LOGRADOURO"
      );
      return false;
    } else if (this.number.invalid) {
      this.toast.warning("O campo NÚMERO deve ser preenchido", "NÚMERO");
      return false;
    }
    return true;
  }
}
