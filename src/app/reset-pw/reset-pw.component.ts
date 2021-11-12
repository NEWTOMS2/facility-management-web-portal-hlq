import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-pw',
  templateUrl: './reset-pw.component.html',
  styleUrls: ['./reset-pw.component.css']
})
export class ResetPwComponent implements OnInit {

  formGroup: FormGroup;
  
  constructor() { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.formGroup = new FormGroup({
      u_email: new FormControl('', [Validators.required, Validators.email])
    });
  }
}