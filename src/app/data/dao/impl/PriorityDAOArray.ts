import { PriorityDAO } from '../interface/priority-dao';
import { Observable } from 'rxjs';
import { Priority } from 'src/app/model/priority.model';

export class PriorityDAOArray implements PriorityDAO {
    
    get(id: number): Observable<Priority> {
        throw new Error("Method not implemented.");
    }

    getAll(): Observable<Priority[]> {
        throw new Error("Method not implemented.");
    }

    add(T: any): Observable<Priority> {
        throw new Error("Method not implemented.");
    }

    update(T: any): Observable<Priority> {
        throw new Error("Method not implemented.");
    }

    delete(id: number): Observable<Priority> {
        throw new Error("Method not implemented.");
    }
    
}