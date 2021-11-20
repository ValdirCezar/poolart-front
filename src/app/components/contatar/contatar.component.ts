import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contatar',
  templateUrl: './contatar.component.html',
  styleUrls: ['./contatar.component.css']
})
export class ContatarComponent implements OnInit {

  @Input() phoneNumber: string;

  constructor() { }

  ngOnInit(): void {
    console.log(this.phoneNumber);
    
  }

}
