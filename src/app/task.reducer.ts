import { createFeatureSelector } from '@ngrx/store';
import { EntityState, createEntityAdapter } from '@ngrx/entity'
import * as actions from './task.action';

//structure of task
export interface Task {
    id: number,
    title: string,
    description: string,
    done: boolean
}

//create an adapter with a sort method by id
export const taskAdapter = createEntityAdapter<Task>({
    sortComparer: (a: Task, b: Task) => (a.id < b.id ? 1 : -1),
});
  
// create an EntityState of task
export interface State extends EntityState<Task> {}

const defaultTask = {
    //empty, we get data from the mocked backend
}

export const initialState: State = taskAdapter.getInitialState(defaultTask);

export function taskReducer(state: State = initialState, action: actions.TaskActions) {
    console.log('taskReducer', action.type, state)

    switch(action.type) {

        case actions.INIT: //action to replace all the current tasks or to init
            return taskAdapter.addAll(action.tasks, state)

        case actions.CREATE: // action to add one task to the state
            return taskAdapter.addOne(action.task, state);

        default:
            return state;
        
    }
}

//create a selector for task
export const getTaskState = createFeatureSelector<State>('task');

export const {
    selectAll
} = taskAdapter.getSelectors(getTaskState);
