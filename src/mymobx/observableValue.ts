import { globalState } from './globalState';
import { isPrimitive, isObservable, isPureObject } from './utils';
import { $$observable } from './constants';
import { observableObject } from './observableObject';

function enhancer(value: any) {
    if (isObservable(value)) return value;
    if (isPrimitive(value)) return value;
    if (isPureObject(value)) return observableObject(value);
    return value;
}

export class ObservableValue {
    private _value: any;
    private _observers: Set<(...args: any) => any> = new Set();

    constructor(value: any) {
        (this as any)[$$observable] = true;

        this._value = enhancer(value);
    }

    get() {
        if (globalState.trackingDerivation) {
            this.observe(globalState.trackingDerivation);
        }

        return this._value;
    }

    set(value: any) {
        this._value = enhancer(value);
        this.notify();
    }

    observe(reaction: (...args: any) => any) {
        this._observers.add(reaction);
    }

    dispose(reaction: (...args: any) => any) {
        this._observers.delete(reaction);
    }

    private notify() {
        this._observers.forEach(observer => observer());
    }
}
