import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Asset } from '../interfaces/asset';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  assets: Asset[] = [];

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) {}

  getAsset(id: number) {
    return this.http.get<Asset>('https://fm-assets-system-api.us-e1.cloudhub.io/api/assets/' + id)
    .pipe(
      catchError(this.handleError)
    )
  }

  getAssets() {
    return this.http.get<Asset>('https://fm-assets-system-api.us-e1.cloudhub.io/api/assets')
    .pipe(
      catchError(this.handleError)
    )
  }

  deleteAsset(id: string) {
    return this.http.delete<any>('https://fm-assets-system-api.us-e1.cloudhub.io/api/assets/' + id)
    .pipe(
      catchError(this.handleError)
    )
  }

  createAsset(asset: Asset) {
    const requestAsset =  {
      a_description: asset.a_description,
      a_quantity: asset.a_quantity,
      a_date_created: asset.a_date_created,
      a_type: asset.a_type,
      a_filler1: asset.a_filler1,
      a_filler2: asset.a_filler2,
      fk_building: asset.fk_building,
      fk_propietor: asset.fk_propietor
  }
  console.log(JSON.stringify(requestAsset));
  return this.http.post<any>('https://fm-assets-system-api.us-e1.cloudhub.io/api/assets', JSON.stringify(requestAsset), this.httpOptions)
    .pipe(
      catchError(this.handleError)
    )
  }

  updateAsset(asset: Asset) {
    const requestAsset =  {
      id: asset.id,
      a_description: asset.a_description,
      a_quantity: asset.a_quantity,
      a_date_created: asset.a_date_created,
      a_type: asset.a_type,
      a_filler1: asset.a_filler1,
      a_filler2: asset.a_filler2,
      fk_building: asset.fk_building,
      fk_propietor: asset.fk_propietor
  }
  console.log(JSON.stringify(requestAsset));
  return this.http.patch<any>('https://fm-assets-system-api.us-e1.cloudhub.io/api/assets/' + requestAsset.id, JSON.stringify(requestAsset), this.httpOptions)
    .pipe(
      catchError(this.handleError)
    )
  }

  handleError(error: any ) {
    return throwError(error);
  }
}
