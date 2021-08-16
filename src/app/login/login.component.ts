import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../services/auth-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;
  loading = false;
  constructor(private authService:AuthServiceService, private _snackBar: MatSnackBar, private router:Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.formGroup = new FormGroup({
      u_email: new FormControl('', [Validators.required, Validators.email]),
      u_password: new FormControl('', [Validators.required])
    });
  }

  loginProces() {

    const user = this.formGroup.value.u_email;
    const pw = this.formGroup.value.u_password; 
    console.log(user);
    console.log(pw);

    if(this.formGroup.valid){
      this.authService.login(user, pw).subscribe((result: any) =>{
        if(result.data.length > 0){
          console.log(result);
          this.setLoading();
        } else {
          this.formGroup.reset;
          this.error();
        }
      })
    }
  }
  
error(){
  this._snackBar.open('Usuario o contraseña invalido', '', {
    duration: 5000,
    horizontalPosition: 'center',
    verticalPosition: 'bottom'
  });
}

  setLoading() {
    this.loading = true;
    setTimeout(() => {
      this.router.navigate(['dashboard']);
      this.loading = false;
    }, 1500);
  }
}
