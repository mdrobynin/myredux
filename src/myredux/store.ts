import { Observable } from './observable';
import { Action, StateProps, StoreReducer } from './types';

export class Store {
    private currentState: StateProps;
    private reducer: StoreReducer;
    private observable: Observable<StateProps>;

    constructor(reducer: StoreReducer, initialValues: StateProps) {
        this.reducer = reducer;
        this.currentState = initialValues;
        this.observable = new Observable();
    }

    subscribe(subscriber: (state: StateProps) => void) {
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

export function createStore(reducer: StoreReducer, initialValues: StateProps) {
    return new Store(reducer, initialValues);
}
