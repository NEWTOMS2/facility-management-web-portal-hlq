import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Asset } from 'src/app/interfaces/asset';
import { AssetService } from 'src/app/services/asset.service';

@Component({
  selector: 'app-add-asset',
  templateUrl: './add-asset.component.html',
  styleUrls: ['./add-asset.component.css']
})
export class AddAssetComponent implements OnInit {

  a_building: any[] = ['VITA'];
  a_propietor: any[] = [];

  form: FormGroup;

  asset: any;
  id: number;

  constructor(private fb: FormBuilder, private _assetService: AssetService,
    private router: Router, private _snackBar: MatSnackBar) {
      
    this.form = this.fb.group({
      id: [''],
      a_description: ['', Validators.required],
      a_quantity: [0, Validators.required],
      a_date_created: [''],
      a_type: ['', Validators.required],
      a_filler1: [''],
      a_filler2: [''],
      fk_building: ['', Validators.required],
      fk_propietor: ['']
    })
  }

  ngOnInit(): void {
  }

  createAsset() {
    const asset: Asset = {
      id: 0, //Se le asigna un valor cualquiera para armar el objeto, pero la API posee un ID serial, es decir, aumenta solo.
      a_description: this.form.value.a_description,
      a_quantity: parseFloat(this.form.value.a_quantity),
      a_date_created: this.form.value.a_date_created,
      a_type: this.form.value.a_type,
      a_filler1: this.form.value.a_filler1,
      a_filler2: this.form.value.a_filler2,
      fk_building: 1,
      fk_propietor: 1
    }

    console.log(asset);

    this._assetService.createAsset(asset).subscribe(() => {
      this.router.navigate(['/dashboard/assets']);

      this._snackBar.open('Activo agregado exitosamente.', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
      });
    });
  }
}
