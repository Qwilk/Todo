import { TestData } from './../../test-data';
import { TaskDAO } from './../interface/task-dao';
import { Observable, of } from 'rxjs';
import { Category } from 'src/app/model/category.model';
import { Priority } from 'src/app/model/priority.model';
import { Task } from 'src/app/model/task.model';

export class TaskDAOArray implements TaskDAO {

    search(searchText: string, category: Category, priorety: Priority, status: boolean): Observable<Task[]> {
        return of(this.searchTodos(searchText, category, priorety, status));
    }

    private searchTodos(searchText: string, category: Category, priorety: Priority, status: boolean): Task[] {
        let allTasks = TestData.tasks;

        if (category != null) {
            allTasks = allTasks.filter(todo => todo.category === category);  
        }

        return allTasks;
    }

    getCompletedCountInCategory(category: Category): Observable<number> {
        throw new Error("Method not implemented.");
    }

    getUncompletedCountInCategory(category: Category): Observable<number> {
        throw new Error("Method not implemented.");
    }

    getTotalCountInCategory(category: Category): Observable<number> {
        throw new Error("Method not implemented.");
    }

    getTotalCount(): Observable<number> {
        throw new Error("Method not implemented.");
    }

    get(id: number): Observable<Task> {
        return of(TestData.tasks.find(item => item.id === id)); 
    }

    getAll(): Observable<Task[]> {
        return of(TestData.tasks);
    }

    add(T: any): Observable<Task> {
        throw new Error("Method not implemented.");
    }

    update(T: any): Observable<Task> {
        throw new Error("Method not implemented.");
    }
    
    delete(id: number): Observable<Task> {
        throw new Error("Method not implemented.");
    }

}