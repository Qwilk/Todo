import { CategoryDAOArray } from './../data/dao/impl/CategoryDAOArray';
import { Observable } from 'rxjs';
import { TaskDAOArray } from './../data/dao/impl/TaskDAOArray';
import { Injectable } from '@angular/core';
import { Task } from '../model/task.model';
import { Category } from '../model/category.model';
import { Priority } from '../model/priority.model';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  private TaskDAOArray = new TaskDAOArray();
  private CategoryDAOArray = new CategoryDAOArray();

  constructor() { }

  public getAllTasks(): Observable<Task[]> {
    return this.TaskDAOArray.getAll();
  }

  public getAllCategories(): Observable<Category[]> {
    return this.CategoryDAOArray.getAll();
  }

  public searchTasks(searchText: string, category: Category, priorety: Priority, status: boolean): Observable<Task[]> {
    return this.TaskDAOArray.search(searchText, category, priorety, status);
  }
}
