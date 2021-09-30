import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { cpf } from 'cpf-cnpj-validator';
import { Artist } from 'src/app/models/artist';
import { ArtistService } from 'src/app/services/artist.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  artist: Artist = {
    id:       '',
    name:     '',
    cpf:      '',
    phone:    '',
    email:    '',
    password: '',
    about:    '',
    age:      0
  }

  constructor(
    private toast: ToastrService,
    private service: ArtistService) { }

  name: FormControl  = new FormControl(null, Validators.required)
  cpf: FormControl   = new FormControl(null, Validators.required)
  phone: FormControl = new FormControl(null, Validators.required)
  email: FormControl = new FormControl(null, Validators.email)
  password: FormControl = new FormControl(null, [Validators.minLength(5), Validators.maxLength(50)])

  ngOnInit(): void { }

  create(): void {
    if(this.validFields()) {
      this.service.create(this.artist).subscribe(() => {
        this.toast.success('Usuário cadastrado com sucesso!')
      }, err => {
        this.toast.error(err.error.message)
      })
    }
  }

  validFields(): boolean {
    if (!cpf.isValid(this.artist.cpf)) {
      this.toast.warning("Digite um CPF válido", "CPF")
      return false
    } else if (this.name.invalid) {
      this.toast.warning("O campo NOME deve ter entre 3 e 50 caracteres", "Nome")
      return false
    } else if (this.cpf.invalid) {
      this.toast.warning("O campo CPF deve ser preenchido", "CPF")
      return false
    } else if (this.phone.invalid) {
      this.toast.warning("O campo TELEFONE deve ser preenchido", "TELEFONE")
      return false
    } else if (this.email.invalid) {
      this.toast.warning("O campo E-MAIL deve ser preenchido", "E-MAIL")
      return false
    } else if (this.password.invalid) {
      this.toast.warning("O campo SENHA deve entre 6 e 50 caracteres", "SENHA")
      return false
    }
    return true
  }


}
