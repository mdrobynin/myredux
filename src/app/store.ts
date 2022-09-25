import { createStore } from '../myredux';
import { reducer } from './reducer';

const initialState = {
    counter: 0
};

export const store = createStore(reducer, initialState);
