import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  } 

  constructor(private http: HttpClient) {}

  login(email: string, pw: string) {

    const requestLogin = {
      u_email: email,
      u_password: pw
    }
    return this.http.post('https://fm-web-app-experience-api.us-e1.cloudhub.io/api/login', JSON.stringify(requestLogin), this.httpOptions)
    .pipe(
      catchError(this.handleError)
    )
  }

  handleError(error: any ) {
    return throwError(error);
  }
}
