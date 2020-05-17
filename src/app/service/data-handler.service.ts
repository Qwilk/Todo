import { Injectable } from '@angular/core';
import { Category } from '../model/category.model';
import { TestData } from '../data/test-data';
import { Task } from '../model/task.model';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  tasksSubject = new BehaviorSubject<Task[]>(TestData.tasks);
  categoriesSubject = new BehaviorSubject<Category[]>(TestData.categories);

  constructor() { }

  public getCategories(): Category[] {
    return TestData.categories;
  }

  public fillTask(): void {
    this.tasksSubject.next(TestData.tasks);
  }

  public fillTaskByCategory(category: Category): void {
    const tasks = TestData.tasks.filter(task => task.category === category);
    this.tasksSubject.next(tasks);
  }
}
