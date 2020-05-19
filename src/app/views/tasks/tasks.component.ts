import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
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
export class TasksComponent implements OnInit, AfterViewInit {

  public tasks: Task[];

  public displayedColumns: string[] = ['color', 'id', 'title', 'category', 'priority', 'date'];
  public dataSource: MatTableDataSource<Task>;

  @ViewChild(MatSort, {static: false}) private sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) private paginator: MatPaginator;

  constructor(private dataHandler: DataHandlerService) { }

  public ngOnInit(): void {
    this.dataHandler.tasksSubject.subscribe(
      tasks => this.tasks = tasks,
      err => console.error(err)
    );

    this.dataSource = new MatTableDataSource();
    this.refreshTable();
  }

  public ngAfterViewInit(): void {
    this.addTableObjects();
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
    this.addTableObjects();

    this.dataSource.sortingDataAccessor = (task, colName) => {
      switch(colName) {
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
}
