import { createFeatureSelector } from '@ngrx/store';
import { EntityState, createEntityAdapter } from '@ngrx/entity'
import * as actions from './task.action';

export interface Task {
    id: number,
    title: string,
    description: string,
    done: boolean
}

export const taskAdapter = createEntityAdapter<Task>({
    sortComparer: (a: Task, b: Task) => b.id.toString().localeCompare(a.id.toString()),
});
  
export interface State extends EntityState<Task> {}

const defaultTask = {
    //empty, we get data from the mocked backend
}

export const initialState: State = taskAdapter.getInitialState(defaultTask);

export function taskReducer(state: State = initialState, action: actions.TaskActions) {
    console.log('taskReducer', action.type, state)

    switch(action.type) {

        case actions.INIT:
            return taskAdapter.addAll(action.tasks, state)

        default:
            return state;
        
    }
}

export const getTaskState = createFeatureSelector<State>('task');

export const {
    selectAll
} = taskAdapter.getSelectors(getTaskState);
