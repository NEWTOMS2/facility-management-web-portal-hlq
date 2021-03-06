import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [];

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) {}

  getUser(id: number) {
    return this.http.get<User>('https://fm-users-system-api.us-e1.cloudhub.io/api/users/' + id)
    .pipe(
      catchError(this.handleError)
    )
  }

  getUsers() {
    return this.http.get<User>('https://fm-users-system-api.us-e1.cloudhub.io/api/users')
    .pipe(
      catchError(this.handleError)
    )
  }

  deleteUser(id: string) {
    return this.http.delete<any>('https://fm-users-system-api.us-e1.cloudhub.io/api/users/' + id)
    .pipe(
      catchError(this.handleError)
    )
  }

  createUser(user: User) {
    const requestUser =  {
      u_email: user.u_email,
      u_password: user.u_password,
      u_name: user.u_name,
      u_surname: user.u_surname,
      u_type: user.u_type,
      u_status: user.u_status
  }
  console.log(JSON.stringify(requestUser));
  return this.http.post<any>('https://fm-users-system-api.us-e1.cloudhub.io/api/users', JSON.stringify(requestUser), this.httpOptions)
    .pipe(
      catchError(this.handleError)
    )
  }

  updateUser(user: User) {
    const requestUser =  {
      id: user.id,
      u_email: user.u_email,
      u_name: user.u_name,
      u_surname: user.u_surname,
      u_type: user.u_type,
      u_status: user.u_status
  }
  console.log(JSON.stringify(requestUser));
  return this.http.patch<any>('https://fm-users-system-api.us-e1.cloudhub.io/api/users/' + requestUser.id, JSON.stringify(requestUser), this.httpOptions)
    .pipe(
      catchError(this.handleError)
    )
  }

  handleError(error: any ) {
    return throwError(error);
  }
}
