import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-access-control',
  templateUrl: './access-control.component.html',
  styleUrls: ['./access-control.component.css']
})
export class AccessControlComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openNewControlAccessTap() {
    window.open('https://d2z8t35ebo69h4.cloudfront.net/');
  }

}
