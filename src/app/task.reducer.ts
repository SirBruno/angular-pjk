import { createReducer, on } from '@ngrx/store';
import { addTask } from './task.actions';

export const initialState = { name: 'Do stuff', priority: 'high' };

const _taskReducer = createReducer(initialState,
    on(addTask, state => state = { name: 'play tibia', priority: 'low' })
);

export const taskReducer = (state, action) => {
    return _taskReducer(state, action);
}