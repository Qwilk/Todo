import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task.model';
import { DataHandlerService } from 'src/app/service/data-handler.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  public tasks: Task[];

  constructor(private dataHandler: DataHandlerService) { }

  public ngOnInit(): void {
    this.dataHandler.tasksSubject.subscribe(
      task => this.tasks = task,
      err => console.error(err)
    );
  }

}
