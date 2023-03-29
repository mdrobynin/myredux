import { createStore, combineReducers } from '../myredux';
import { Service } from './services/service';

const initialState = {
    counter: 0
};

export const store = createStore(combineReducers(Service.reducer), initialState);
