import { DataHandlerService } from './service/data-handler.service';
import { Task } from './model/task.model';
import { Component } from '@angular/core';
import { Category } from './model/category.model';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo';
  tasks: Task[];
  categories: Category[];

  constructor(
    private dataHandlaer: DataHandlerService
  ) {}

  public ngOnInit(): void {
    this.dataHandlaer.getAllTasks().subscribe(
      tasks => this.tasks = tasks,
      err => console.error(err)
    );

    this.dataHandlaer.getAllCategories().subscribe(
      categories => this.categories = categories,
      err => console.error(err)
    );
  }

  public onSelectTask(task: Task): void {
   console.log(task);
  }

  public onSelectCategory(category: Category): void {
    this.dataHandlaer.searchTasks(null, category, null, null).subscribe(
      tasks => this.tasks = tasks,
      err => console.error(err)
    );
  }
}
