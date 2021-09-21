import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Asset } from 'src/app/interfaces/asset';
import { AssetService } from 'src/app/services/asset.service';
import { DialogService } from 'src/app/services/dialog.service';


@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css']
})
export class AssetsComponent implements OnInit {

  assets: Asset[] = [];

  displayedColumns: string[] = ['id', 'a_description', 'a_quantity', 'a_date_created', 'a_type', 'a_filler1', 
  'a_filler2', 'fk_propietor', 'fk_building', 'actions'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(private _assetService: AssetService, private _snackBar: MatSnackBar, private router: Router, 
    private dialog: DialogService) { }

  ngOnInit(): void {
    this.loadAssets();
  }

  loadAssets(){
    this.dataSource = new MatTableDataSource();
    this._assetService.getAssets().subscribe((result: any) =>{
      if(result.data.length > 0){
        console.log(result);
        this.assets = result.data.slice();
        this.dataSource = new MatTableDataSource(this.assets);
        console.log(this.assets);
      }
    });
  }

  confirmCancelDialog(id: number) {
    this.dialog
      .confirmDialog({
        title: 'Confirmar acción',
        message: '¿Deseas eliminar este activo?',
        confirmCaption: 'Eliminar',
        cancelCaption: 'Cancelar',
      })
      .subscribe((confirmed) => {
        if (confirmed) {
          console.log('El usuario confirmo esta acción.');
    
        }
      });
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
