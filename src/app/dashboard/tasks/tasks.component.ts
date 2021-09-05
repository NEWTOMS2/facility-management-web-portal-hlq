import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Task } from 'src/app/interfaces/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];

  displayedColumns: string[] = ['id', 't_description', 't_date_created', 't_status', 't_filler1', 't_filler2', 'fk_employee', 
  'fk_shift', 'actions'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(private _taskService: TaskService, private _snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(){
    this.dataSource = new MatTableDataSource();
    this._taskService.getTasks().subscribe((result: any) =>{
      if(result.data.length > 0){
        console.log(result);
        this.tasks = result.data.slice();
        this.dataSource = new MatTableDataSource(this.tasks);
        console.log(this.tasks);
      }
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}