import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task.model';
import { DataHandlerService } from 'src/app/service/data-handler.service';
import { MatTableDataSource } from '@angular/material/table';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  public tasks: Task[];

  public displayedColumns: string[] = ['color', 'id', 'title', 'category', 'priority', 'date'];
  public dataSource: MatTableDataSource<Task>;

  constructor(private dataHandler: DataHandlerService) { }

  public ngOnInit(): void {
    this.dataHandler.tasksSubject.subscribe(
      tasks => this.tasks = tasks,
      err => console.error(err)
    );

    this.dataSource = new MatTableDataSource();
    this.refreshTable();
  }

  public toggleTaskCompleted(task: Task): void {
    task.completed = !task.completed;
  }

  public getPriorityColor(task: Task): string {
    if (task.completed) {
      return '#f8f9fa'
    }

    if (task.priority && task.priority.color) {
      return task.priority.color;
    }

    return '#fff';
  }

  private refreshTable() : void {
    this.dataSource.data = this.tasks;
  }
}
