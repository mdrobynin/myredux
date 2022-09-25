import { Observable } from './observable';

import { Action, AnyState, Reducer } from './types';

export class Store<State extends AnyState = AnyState> {
    private currentState: State;
    private reducer: Reducer<State>;
    private observable: Observable<State>;

    constructor(reducer: Reducer<State>, initialValues: State) {
        this.reducer = reducer;
        this.currentState = initialValues;
        this.observable = new Observable();
    }

    subscribe(subscriber: (state: State) => void) {
        if (this.observable.subscribe(subscriber)) {
            this.callUpdate();
        }
    }

    getState() {
        return JSON.parse(JSON.stringify(this.currentState));
    }

    dispatch(action: Action) {
        this.currentState = this.reducer(this.getState(), action);
        this.callUpdate();
    }

    private callUpdate() {
        this.observable.emit(this.currentState);
    }
}

export function createStore<State extends AnyState = AnyState>(reducer: Reducer<State>, initialValues: State) {
    return new Store(reducer, initialValues);
}
