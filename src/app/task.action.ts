import { Action } from '@ngrx/store';
import { Task } from './task.reducer';

export const INIT = '[TASK] Init';

export class initTask implements Action {
    readonly type = INIT;
    constructor(public tasks: Task[]) { }
}

export type TaskActions = 
initTask;