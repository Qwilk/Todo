import { Observable } from 'rxjs';
import { CommonDAO } from './common-dao';
import { Task } from 'src/app/model/task.model';
import { Category } from 'src/app/model/category.model';
import { Priority } from 'src/app/model/priority.model';

export interface TaskDAO extends CommonDAO<Task> {
    search(searchText: string, category: Category, priorety: Priority, status: boolean,): Observable<Task[]>;

    getCompletedCountInCategory(category: Category): Observable<number>;

    getUncompletedCountInCategory(category: Category): Observable<number>;

    getTotalCountInCategory(category: Category): Observable<number>;

    getTotalCount(): Observable<number>;
}
