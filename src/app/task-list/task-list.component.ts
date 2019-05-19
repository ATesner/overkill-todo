import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as actions from '../task.action';
import * as fromTask from '../task.reducer';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks$: Observable<any[]>;

  constructor(private appService: AppService,
    private store: Store<fromTask.State>) {
      this.tasks$ = this.store.select(fromTask.selectAll);
  }

  ngOnInit() {
    this.getAllTasks();
  }

  getAllTasks() {
    this.appService.getAllTodos().subscribe((data: fromTask.Task[]) => {
      // console.log('getAllTodos', data)
      this.store.dispatch(new actions.initTask(data))
    })
  }
}
