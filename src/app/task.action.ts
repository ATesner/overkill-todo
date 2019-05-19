import { Action } from '@ngrx/store';
import { Task } from './task.reducer';

export const INIT = '[TASK] Init';
export const CREATE = '[TASK] Create';

export class initTask implements Action {
    readonly type = INIT;
    constructor(public tasks: Task[]) { }
}

export class createTask implements Action {
    readonly type = CREATE;
    constructor(public task: Task) { }
}

export type TaskActions = 
initTask | createTask;