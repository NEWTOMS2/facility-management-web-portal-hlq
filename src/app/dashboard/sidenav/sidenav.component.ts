import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/interfaces/menu';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  menu: Menu[] = [];

  constructor(private _menuService: MenuService) { }

  ngOnInit(): void {
    this.loadMenu();
  }

  loadMenu() {
    this._menuService.getMenu().subscribe(data => {
      this.menu = data;
    })
  }

}
