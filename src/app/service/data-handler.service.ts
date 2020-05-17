import { Injectable } from '@angular/core';
import { Category } from '../model/category.model';
import { TestData } from '../data/test-data';
import { Task } from '../model/task.model';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  constructor() { }

  public getCategories(): Category[] {
    return TestData.categories;
  }

  public getTask(): Task[] {
    return TestData.tasks;
  }
}
