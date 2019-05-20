import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromTask from '../task.reducer';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  task: fromTask.Task;

  constructor(private store: Store<fromTask.State>, private route: ActivatedRoute) {
    
    let id = this.route.snapshot.paramMap.get('id');

    //select the task from the store with id 
    this.store.select(fromTask.selectAll).subscribe(tasks => {
      this.task = tasks.find(task => task.id.toString() == id)
    }); 
  }

  ngOnInit() { }

}
