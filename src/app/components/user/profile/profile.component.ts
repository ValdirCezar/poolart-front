import { Component, OnInit } from "@angular/core";
import { Artist } from "../../../models/user";
import { ArtistService } from 'src/app/services/artist.service';
import { ActivatedRoute } from "@angular/router";
import { LocalUserService } from '../../../services/local-user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {

  artist: Artist = {
    name:     "",
    cpf:      "",
    phone:    "",
    email:    "",
    password: "",
  };

  constructor(
    private service: ArtistService,
    private localUser: LocalUserService,
    private toast: ToastrService
  ) {}

  ngOnInit(): void {
    this.artist = this.localUser.getLocalUser();
  }

  update(): void {
    this.artist.profiles = [1];
    this.service.update(this.artist).subscribe(res => {
      this.artist = res;
      this.successMessage();
    })
  }

  successMessage(): void {
    this.toast.success("Informações atualizadas com sucesso!");
  }

}
