import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { FileUploadService } from "src/app/services/file-upload.service";

@Component({
  selector: "app-file-upload",
  templateUrl: "./file-upload.component.html",
  styleUrls: ["./file-upload.component.css"],
})
export class FileUploadComponent implements OnInit {

  constructor(
    private fileService: FileUploadService,
    private toast: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  inputFileChange(event: any) {
    if (event.target.files && event.target.files[0]) {
      const foto = event.target.files[0];
      this.fileService.upload(foto).subscribe(
        () => {
          this.router.navigate(["../dashboard/home"]);
          this.toast.success("Imagem atualizada com sucesso!");
        },
        (err) => {
          this.toast.error(err.error.message);
        }
      );
    }
  }

}
