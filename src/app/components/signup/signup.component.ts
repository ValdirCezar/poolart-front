import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private tostr: ToastrService) { }

  name:     FormControl = new FormControl(null, Validators.required)
  cpf:      FormControl = new FormControl(null, Validators.required)
  phone:    FormControl = new FormControl(null, Validators.required)
  mail:     FormControl = new FormControl(null, Validators.email)
  password: FormControl = new FormControl(null, Validators.required)

  ngOnInit(): void {}

  validFields(): void {
    if(this.name.invalid || this.cpf.invalid || this.phone.invalid
      || this.mail.invalid || this.password.invalid) {
        this.tostr.warning("Preencha todos os campos", "Cadastro")
      }
  }
}

