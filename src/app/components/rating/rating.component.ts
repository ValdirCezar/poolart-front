import { Component, OnInit } from "@angular/core";
import { UserService } from "../../services/user.service";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-rating",
  templateUrl: "./rating.component.html",
  styleUrls: ["./rating.component.css"],
})
export class RatingComponent implements OnInit {

  stars = 0;
  userId: string = "0";

  constructor(
    private userService: UserService,
    private toastService: ToastrService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get("id");
  }

  sendRating(): void {
    this.userService.sendRating(this.userId, this.stars).subscribe(
      () => {
        console.log(this.stars);

        this.toastService.success("Avaliação realizada com sucesso!", "Avaliação", {
          positionClass: "toast-top-right"
        });
        this.router.navigate(["../../dashboard/find"]);
      },
      () => {
        this.toastService.success("Falha na avaliação :( Tente posteriormente");
        this.router.navigate(["../../find"]);
      }
    );
  }
}
