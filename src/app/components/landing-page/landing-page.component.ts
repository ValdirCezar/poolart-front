import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { AboutComponent } from "../about/about.component";

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.css"],
})
export class LandingPageComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog() {
    const dialogRef = this.dialog.open(AboutComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  search(): void {
    console.log("Clicou em pesquisar");
  }
}
