import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Task } from '../interfaces/task';
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

  getAssets() {
    return this.http.get<Asset>('https://fm-assets-system-api.us-e1.cloudhub.io/api/assets')
    .pipe(
      catchError(this.handleError)
    )
  }

  handleError(error: any ) {
    return throwError(error);
  }
}
