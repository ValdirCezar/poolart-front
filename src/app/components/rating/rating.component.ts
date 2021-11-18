import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  rating: number = 4;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  sendRating(): void {
    this.userService.sendRating(1, this.rating).subscribe(res => {
      console.log(res);
      
    })
  }

}
