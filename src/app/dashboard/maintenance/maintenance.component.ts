import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css']
})
export class MaintenanceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openNewMaintenanceTap() {
    window.open('https://web.geocall.cloud/naos/w/index.htm');
  }

  openNewInspectionTap() {
    window.open('https://space1.overit.it/');
  }
}
