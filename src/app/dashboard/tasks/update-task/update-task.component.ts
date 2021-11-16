import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/interfaces/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {

  t_employee: any[] = [];
  t_shift: any[] = ['DIURNO', 'MIXTO', 'NOCTURNO'];

  form: FormGroup;

  task: any;
  id: number;

  constructor(private fb: FormBuilder, private _taskService: TaskService,
    private router: Router, private _snackBar: MatSnackBar, private _activatedRoute: ActivatedRoute) {
      
      _activatedRoute.queryParams.subscribe(
        params => this.id = params['id']
        );

      const _this = this;

      _taskService.getUser(this.id).subscribe((result: any) =>{
        if(result.data.length > 0){
          console.log(result);
          _this.task = result.data[0];
          _this.form = _this.fb.group({
            id: [_this.task.id],
            t_description: [_this.task.t_description, Validators.required],
            t_date_created: [_this.task.t_date_created],
            t_status: [_this.task.t_status, Validators.required],
            t_filler1: [_this.task.t_filler1, Validators.required],
            t_filler2: [_this.task.t_filler2, Validators.required],
            fk_employee: [_this.task.fk_employee],
            fk_shift: [_this.task.fk_shift, Validators.required]
          })
        }
      });
      
      this.form = new FormGroup({
          id: new FormControl(''),
          t_description: new FormControl(''),
          t_date_created: new FormControl(''),
          t_status: new FormControl(''),
          t_filler1: new FormControl(''),
          t_filler2: new FormControl(''),
          fk_employee: new FormControl(''),
          fk_shift: new FormControl('')
      }) 
  }


  ngOnInit(): void {
  }

  updateUser() {
    const task: Task = {
      id: this.form.value.id,
      t_description: this.form.value.t_description,
      t_date_created: this.form.value.t_date_created,
      t_status: this.form.value.t_status,
      t_filler1: this.form.value.t_filler1,
      t_filler2: this.form.value.t_filler2,
      fk_employee: this.form.value.fk_employee,
      fk_shift: this.form.value.fk_shift
    }

    this._taskService.updateTask(task).subscribe(() => {
      this.router.navigate(['/dashboard/tasks']);

      this._snackBar.open('Tarea actualizada exitosamente.', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
      });
    });
  }
}