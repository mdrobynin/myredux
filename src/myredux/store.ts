import { Observable } from './observable';

import { Action, AnyState, Reducer } from './types';

export class Store<S extends AnyState = AnyState> {
    private currentState: S;
    private reducer: Reducer<S>;
    private observable: Observable<S>;

    constructor(reducer: Reducer<S>, initialValues: S) {
        this.reducer = reducer;
        this.currentState = initialValues;
        this.observable = new Observable();
        this.getState = this.getState.bind(this);
        this.dispatch = this.dispatch.bind(this);
    }

    subscribe(subscriber: (state: S) => void) {
        if (this.observable.subscribe(subscriber)) {
            this.callUpdate();
        }
    }

    getState() {
        return JSON.parse(JSON.stringify(this.currentState)) as S;
    }

    dispatch(action: Action<S>) {
        if (action) {
            if (typeof action === 'function') {
                action({
                    dispatch: this.dispatch,
                    getState: this.getState
                });
            } else {
                this.currentState = this.reducer(this.getState(), action);
                this.callUpdate();
            }
        }
    }

    private callUpdate() {
        this.observable.emit(this.currentState);
    }
}

export function createStore<State extends AnyState = AnyState>(reducer: Reducer<State>, initialValues: State) {
    return new Store(reducer, initialValues);
}
