import { Component, OnInit } from '@angular/core';
import { DataHandlerService } from 'src/app/service/data-handler.service';
import { Category } from 'src/app/model/category.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  public categories: Category[];

  constructor(private dataHandler: DataHandlerService) { }

  public ngOnInit(): void {
    this.dataHandler.categoriesSubject.subscribe(
      category => this.categories = category,
      err => console.log(err)
    );
  }

  public showTasksByCategory(category: Category): void {
    this.dataHandler.fillTaskByCategory(category);
  }

}
