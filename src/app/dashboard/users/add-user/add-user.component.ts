import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  u_type: any[] = ['Administrador', 'Usuario'];
  form: FormGroup;

  constructor(private fb: FormBuilder, private _userService: UserService,
     private router: Router, private _snackBar: MatSnackBar) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      pw: ['', Validators.required],
      name: ['', Validators.required],
      utype: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  addUser() {

    const user: User = {
      id: 0,
      u_email: this.form.value.email,
      u_password: this.form.value.pw,
      u_name: this.form.value.name,
      u_surname: 'PRUEBA',
      u_type: this.form.value.utype,
      u_status: true //Por defecto siempre que se crea un usuario esta activo.
    }
    this._userService.addUser(user);
    this.router.navigate(['/dashboard/users']);

    this._snackBar.open('Usuario agregado exitosamente.', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }
}
