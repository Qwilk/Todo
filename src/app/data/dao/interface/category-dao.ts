import { Observable } from 'rxjs';
import { Category } from 'src/app/model/category.model';
import { CommonDAO } from './common-dao';

export interface CategoryDAO extends CommonDAO<Category> {

    search(title: string): Observable<Category[]>;
}
