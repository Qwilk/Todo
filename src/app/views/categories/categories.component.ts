import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataHandlerService } from 'src/app/service/data-handler.service';
import { Category } from 'src/app/model/category.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  
  @Input()
  public categories: Category[];

  @Output()
  public selectCategory = new EventEmitter<Category>();

  public selectedCategory: Category;

  constructor (
    private dataHandler: DataHandlerService
  ) { }

  public ngOnInit(): void {
    
  }

  public showTasksByCategory(category: Category): void {
    if (this.selectedCategory === category) return; 
    
    this.selectedCategory = category;
    this.selectCategory.emit(this.selectedCategory);
  }

}
