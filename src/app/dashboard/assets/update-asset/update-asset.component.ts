import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Asset } from 'src/app/interfaces/asset';
import { AssetService } from 'src/app/services/asset.service';

@Component({
  selector: 'app-update-asset',
  templateUrl: './update-asset.component.html',
  styleUrls: ['./update-asset.component.css']
})
export class UpdateAssetComponent implements OnInit {

  a_building: any[] = ['VITA'];
  a_propietor: any[] = [];

  form: FormGroup;

  asset: any;
  id: number;

  constructor(private fb: FormBuilder, private _assetService: AssetService,
    private router: Router, private _snackBar: MatSnackBar, private _activatedRoute: ActivatedRoute) {
      
      _activatedRoute.queryParams.subscribe(
        params => this.id = params['id']
        );

      const _this = this;

      _assetService.getAsset(this.id).subscribe((result: any) =>{
        if(result.data.length > 0){
          console.log(result);
          _this.asset = result.data[0];
          _this.form = _this.fb.group({
            id: [_this.asset.id],
            a_description: [_this.asset.a_description, Validators.required],
            a_quantity: [_this.asset.a_quantity, Validators.required],
            a_date_created: [''],
            a_type: [_this.asset.a_type, Validators.required],
            a_filler1: [_this.asset.a_filler1],
            a_filler2: [_this.asset.a_filler2],
            fk_building: [_this.asset.fk_building, Validators.required],
            fk_propietor: [_this.asset.fk_propietor, Validators.required]
          })
        }
      });
      
      this.form = new FormGroup({
          id: new FormControl(''),
          a_description: new FormControl(''),
          a_quantity: new FormControl(''),
          a_date_created: new FormControl(''),
          a_type: new FormControl(''),
          a_filler1: new FormControl(''),
          a_filler2: new FormControl(''),
          fk_building: new FormControl(''),
          fk_propietor: new FormControl('')
      }) 
  }

  ngOnInit(): void {
  }

  updateAsset() {
    const asset: Asset = {
      id: this.form.value.id,
      a_description: this.form.value.a_description,
      a_quantity: this.form.value.a_quantity,
      a_date_created: this.form.value.a_date_created,
      a_type: this.form.value.a_type,
      a_filler1: this.form.value.a_filler1,
      a_filler2: this.form.value.a_filler2,
      fk_building: this.form.value.fk_building,
      fk_propietor: this.form.value.fk_propietor
    }

    this._assetService.updateAsset(asset).subscribe(() => {
      this.router.navigate(['/dashboard/assets']);

      this._snackBar.open('Activo actualizado exitosamente.', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
      });
    });
  }
}
