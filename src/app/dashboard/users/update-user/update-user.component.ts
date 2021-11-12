import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  u_type: any[] = ['ADMIN', 'USER'];
  form: FormGroup;

  user: any;
  id: number;

  constructor(private fb: FormBuilder, private _userService: UserService,
    private router: Router, private _snackBar: MatSnackBar, private _activatedRoute: ActivatedRoute) {
      
      _activatedRoute.queryParams.subscribe(
        params => this.id = params['id']
        );

      const _this = this;

      _userService.getUser(this.id).subscribe((result: any) =>{
        if(result.data.length > 0){
          console.log(result);
          _this.user = result.data[0];
          _this.form = _this.fb.group({
            id: [_this.user.id],
            email: [_this.user.u_email, Validators.required],
            ustatus: [_this.user.u_status, Validators.required],
            name: [_this.user.u_name, Validators.required],
            surname: [_this.user.u_surname, Validators.required],
            utype: [_this.user.u_type, Validators.required]
          })
        }
      });
      
      this.form = new FormGroup({
          id: new FormControl(''),
          email: new FormControl(''),
          ustatus: new FormControl(''),
          name: new FormControl(''),
          surname: new FormControl(''),
          utype: new FormControl('')
      }) 
  }


  ngOnInit(): void {
  }

  updateUser() {
    const user: User = {
      id: this.form.value.id,
      u_email: this.form.value.email,
      u_password: '', //Este valor no es modificado en la funcion.
      u_name: this.form.value.name,
      u_surname: this.form.value.surname,
      u_type: this.form.value.utype,
      u_status: this.form.value.ustatus
    }

    this._userService.updateUser(user).subscribe(() => {
      this.router.navigate(['/dashboard/users']);

      this._snackBar.open('Usuario actualizado exitosamente.', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
      });
    });
  }

}
