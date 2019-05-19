import { createFeatureSelector } from '@ngrx/store';
import { EntityState, createEntityAdapter } from '@ngrx/entity'
import * as actions from './task.action';

export interface Task {
    id: number,
    title: string,
    description: string,
    done: boolean
}
