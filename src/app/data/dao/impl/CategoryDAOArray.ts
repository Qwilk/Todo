import { TestData } from './../../test-data';
import { CategoryDAO } from './../interface/category-dao';
import { Observable, of } from 'rxjs';
import { Category } from 'src/app/model/category.model';

export class CategoryDAOArray implements CategoryDAO {
    
    search(title: string): Observable<Category[]> {
        throw new Error("Method not implemented.");
    }
    
    get(id: number): Observable<Category> {
        throw new Error("Method not implemented.");
    }

    getAll(): Observable<Category[]> {
        return of(TestData.categories);
    }

    add(T: any): Observable<Category> {
        throw new Error("Method not implemented.");
    }

    update(T: any): Observable<Category> {
        throw new Error("Method not implemented.");
    }

    delete(id: number): Observable<Category> {
        throw new Error("Method not implemented.");
    }
    
}