import { Injectable } from '@angular/core';
import { Task } from './task';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TaskDataService {

  constructor(
    private api: ApiService
  ) {
  }

  // Simulate GET /tasks
  getAllTasks(): Observable<Task[]> {
    return this.api.getAllTasks();
  }

}
