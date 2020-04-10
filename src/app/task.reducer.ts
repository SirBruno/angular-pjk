import { createReducer, on } from '@ngrx/store';
import { addTask } from './task.actions';

export const initialState = { name: 'Bruno' };

const _taskReducer = createReducer(initialState,
    on(addTask, state => state = { name: 'Joe Jonas' })
);

export const taskReducer = (state, action) => {
    return _taskReducer(state, action);
}