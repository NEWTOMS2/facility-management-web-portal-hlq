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

  u_type: any[] = ['ADMIN', 'USER'];
  form: FormGroup;

  constructor(private fb: FormBuilder, private _userService: UserService,
    private router: Router, private _snackBar: MatSnackBar) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      pw: ['', Validators.required],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      utype: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  createUser() {
    const user: User = {
      id: 0, //Se le asigna un valor cualquiera para armar el objeto, pero la API posee un ID serial, es decir, aumenta solo.
      u_email: this.form.value.email,
      u_password: this.form.value.pw,
      u_name: this.form.value.name,
      u_surname: this.form.value.surname,
      u_type: this.form.value.utype,
      u_status: true //Por defecto siempre que se crea un usuario esta activo.
    }
    this._userService.createUser(user).subscribe(() => {
      this.router.navigate(['dashboard']);

      this._snackBar.open('Usuario agregado exitosamente.', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
      });
    });
  }
}
