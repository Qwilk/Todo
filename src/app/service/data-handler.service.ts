import { Injectable } from '@angular/core';
import { Category } from '../model/category.model';
import { TestData } from '../data/test-data';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  constructor() { }

  public getCategories(): Category[] {
    return TestData.categories;
  }
}
