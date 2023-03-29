import { Reducer, AnyState, PlainAction } from './types';

export function combineReducers<S extends AnyState>(...reducers: Reducer<S>[]): Reducer<S> {
    return (state: S, action: PlainAction) => reducers.reduce((state: S, reducer: Reducer<S>) => reducer(state, action), state);
}
