import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { timestamp } from 'rxjs/operators';
import { Task } from 'src/app/interfaces/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  t_employee: any[] = [];
  t_shift: any[] = ['DIURNO', 'MIXTO', 'NOCTURNO'];

  form: FormGroup;

  task: any;
  id: number;

  constructor(private fb: FormBuilder, private _taskService: TaskService,
    private router: Router, private _snackBar: MatSnackBar) {
    this.form = this.fb.group({
      id: [''],
      t_description: ['', Validators.required],
      t_date_created: [''],
      t_status: ['TO DO', Validators.required],
      t_filler1: [''],
      t_filler2: [''],
      fk_employee: [''],
      fk_shift: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  createTask() {
    const task: Task = {
      id: 0, //Se le asigna un valor cualquiera para armar el objeto, pero la API posee un ID serial, es decir, aumenta solo.
      t_description: this.form.value.t_description,
      t_date_created: this.form.value.t_date_created,
      t_status: this.form.value.t_status,
      t_filler1: this.form.value.t_filler1,
      t_filler2: this.form.value.t_filler2,
      fk_employee: 1,
      fk_shift: 1
    }

    this._taskService.createTask(task).subscribe(() => {
      this.router.navigate(['/dashboard/tasks']);

      this._snackBar.open('Tarea agregada exitosamente.', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
      });
    });
  }
}
