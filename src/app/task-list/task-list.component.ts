import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  title: string = '';
  description: string = '';
  error: string = '';

  constructor(private appService: AppService,
    private store: Store<fromTask.State>,
    private router: Router) {
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

  taskDoneClick(event, task){
    event.preventDefault();

    task.done = !task.done;
    this.appService.updateTodo(task).subscribe(data =>{
        // console.log('updateTodo', data)
        this.getAllTasks();
    })
  }

  detailTodoClick(id) {
    this.router.navigate(['/task/', id]);
  }

  addTodoClick(){
    if(this.title.trim().length > 0){
      this.createTask({ title: this.title, description: this.description, done: false});
    }else{
      this.error = "Title can't be empty";
    }
  }

  createTask(obj) {
    
    this.appService.addTodo(obj).subscribe((data: fromTask.Task) => {
      //console.log('addTodo', data) 
      this.store.dispatch( new actions.createTask(data))
      this.title = '';
      this.description = '';
      this.error = '';
    })
  }

  deleteTodoClick(id) {
    this.appService.deleteTodo(id).subscribe(task => {
      // console.log('deleteTodo', task)
      this.getAllTasks();
    })
  }
}
