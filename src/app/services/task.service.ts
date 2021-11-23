import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: Task[] = [];

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) {}

  getTask(id: number) {
    return this.http.get<Task>('https://fm-tasks-system-api.us-e1.cloudhub.io/api/tasks/' + id)
    .pipe(
      catchError(this.handleError)
    )
  }

  getTasks() {
    return this.http.get<Task>('https://fm-tasks-system-api.us-e1.cloudhub.io/api/tasks')
    .pipe(
      catchError(this.handleError)
    )
  }

  deleteTask(id: string) {
    return this.http.delete<any>('https://fm-tasks-system-api.us-e1.cloudhub.io/api/tasks/' + id)
    .pipe(
      catchError(this.handleError)
    )
  }

  createTask(task: Task) {
    const requestTask =  {
      t_description: task.t_description,
      t_date_created: task.t_date_created,
      t_status: task.t_status,
      t_filler1: task.t_filler1,
      t_filler2: task.t_filler2,
      fk_employee: task.fk_employee,
      fk_shift: task.fk_shift
  }
  console.log(JSON.stringify(requestTask));
  return this.http.post<any>('https://fm-tasks-system-api.us-e1.cloudhub.io/api/tasks', JSON.stringify(requestTask), this.httpOptions)
    .pipe(
      catchError(this.handleError)
    )
  }

  updateTask(task: Task) {
    const requestTask =  {
      id: task.id,
      t_description: task.t_description,
      t_status: task.t_status,
      t_filler1: task.t_filler1,
      t_filler2: task.t_filler2,
      fk_employee: task.fk_employee,
      fk_shift: task.fk_shift
  }
  console.log(JSON.stringify(requestTask));
  return this.http.patch<any>('https://fm-tasks-system-api.us-e1.cloudhub.io/api/tasks/' + requestTask.id, JSON.stringify(requestTask), this.httpOptions)
    .pipe(
      catchError(this.handleError)
    )
  }

  handleError(error: any ) {
    return throwError(error);
  }
}
