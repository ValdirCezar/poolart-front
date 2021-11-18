import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { Artist, User } from "../../models/user";
import { UserService } from "../../services/user.service";
import { HttpEvent } from '@angular/common/http';

@Component({
  selector: "app-find",
  templateUrl: "./find.component.html",
  styleUrls: ["./find.component.css"],
})
export class FindComponent implements AfterViewInit, OnInit {

  name: string = ''
  ELEMENT_DATA: Artist[] = [];

  displayedColumns: string[] = [
    "name",
    "rating",
    "view",
    "evaluate",
    "contact",
  ];

  dataSource = new MatTableDataSource<User>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private userService: UserService) {}

  ngOnInit(): void { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  findAll(): void {
    this.userService.findAll(this.name).subscribe(res => {
      this.ELEMENT_DATA = res
      this.dataSource = new MatTableDataSource<Artist>(res);
      this.dataSource.paginator = this.paginator;
    }, err => {
      console.error(err);
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
}
