import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/model/task.model';
import { DataHandlerService } from 'src/app/service/data-handler.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  public displayedColumns: string[] = ['color', 'id', 'title', 'category', 'priority', 'date'];
  public dataSource: MatTableDataSource<Task>;

  @ViewChild(MatSort, { static: false }) private sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) private paginator: MatPaginator;

  public tasks: Task[];

  @Input('tasks')
  set setTasks(tasks: Task[]) {
    this.tasks = tasks;
    this.fillTable();
  }

  @Output()
  public selectTask = new EventEmitter<Task>()

  constructor(private dataHandler: DataHandlerService) { }

  public ngOnInit(): void {
    this.dataSource = new MatTableDataSource();
    this.fillTable();
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

  private fillTable(): void {
    if (!this.dataSource) return; 

    this.dataSource.data = this.tasks;
    this.addTableObjects();

    this.dataSource.sortingDataAccessor = (task, colName) => {
      switch (colName) {
        case 'priority': return task.priority ? task.priority.id : null;
        case 'category': return task.category ? task.category.title : null;
        case 'date': return task.date ? task.date.toString() : null; // TODO: исправить сортировку даты
        case 'title': return task.title;
      }
    }
  }

  private addTableObjects(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public showTask(task: Task): void {
    this.selectTask.emit(task);
  }
}
