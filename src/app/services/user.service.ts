import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [
    {id: 1, u_email: 'prueba@gmail.com', u_password: '', u_name: 'Prueba 1', u_surname: 'Prueba 1', 
    u_type: 'ADMIN', u_status: true},
    {id: 2, u_email: 'prueba@gmail.com', u_password: '', u_name: 'Prueba 2', u_surname: 'Prueba 2', 
    u_type: 'ADMIN', u_status: true},
    {id: 3, u_email: 'prueba@gmail.com', u_password: '', u_name: 'Prueba 3', u_surname: 'Prueba 3', 
    u_type: 'ADMIN', u_status: true}
  ];

  constructor() { }

  getUsers() {
    return this.users.slice();
  }

  deleteUser(id: number) {
    this.users.splice(id, 1);
  }

  addUser(user: User){
    this.users.unshift(user);
  }
}
