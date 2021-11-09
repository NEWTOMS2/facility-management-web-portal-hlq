import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bi',
  templateUrl: './bi.component.html',
  styleUrls: ['./bi.component.css']
})
export class BiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openNewBITap() {
    window.open('http://18.207.109.180/#/pinboard/523e86d4-0ce9-49bb-ba96-bfbced77a3dc/');
  }
}
