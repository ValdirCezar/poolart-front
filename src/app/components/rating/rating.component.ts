import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  rating: number = 4;

  constructor(
    private userService: UserService,
    private toastService: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  sendRating(): void {
    this.userService.sendRating(1, this.rating).subscribe(() => {
      this.toastService.success("Avaliação realizada com sucesso!");
      this.router.navigate(['../../dashboard/find'])
    }, () => {
      this.toastService.success("Falha na avaliação :( Tente posteriormente");
      this.router.navigate(['../../find'])
    })
  }

}
