import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { cpf } from 'cpf-cnpj-validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  test = '09129161924'

  constructor(private tostr: ToastrService) { }

  name: FormControl = new FormControl(null, Validators.required)
  cpf: FormControl = new FormControl(null, Validators.required)
  phone: FormControl = new FormControl(null, Validators.required)
  mail: FormControl = new FormControl(null, Validators.email)
  password: FormControl = new FormControl(null, [Validators.minLength(5), Validators.maxLength(50)])

  ngOnInit(): void { }

  validFields(): boolean {
    if (!cpf.isValid(this.test)) {
      this.tostr.warning("Digite um CPF válido", "CPF")
      return false
    } else if (this.name.invalid) {
      this.tostr.warning("O campo NOME deve ter entre 3 e 50 caracteres", "Nome")
      return false
    } else if (this.cpf.invalid) {
      this.tostr.warning("O campo CPF deve ser preenchido", "CPF")
      return false
    } else if (this.phone.invalid) {
      this.tostr.warning("O campo TELEFONE deve ser preenchido", "TELEFONE")
      return false
    } else if (this.mail.invalid) {
      this.tostr.warning("O campo E-MAIL deve ser preenchido", "E-MAIL")
      return false
    } else if (this.password.invalid) {
      this.tostr.warning("O campo SENHA deve entre 6 e 50 caracteres", "SENHA")
      return false
    }
    return true
  }


}
