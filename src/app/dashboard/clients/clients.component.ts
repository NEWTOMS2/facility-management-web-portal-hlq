import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openNewClientTap() {
    window.open('https://newtomsllc.my.salesforce.com/?ec=301&startURL=%2Fvisualforce%2Fsession%3Furl%3Dhttps%253A%252F%252Fnewtomsllc.lightning.force.com%252Flightning%252Fo%252FCustomer__c%252Flist%253FfilterName%253DRecent');
  }
}
