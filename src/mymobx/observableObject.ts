import { ObservableValue } from './observableValue';
import { isFunction } from './utils';
import { $$observableAdmin } from './constants';

export class ObservableObject {
    private _target: any;
    private _values: any;

    constructor(target: any) {
        this._target = target;
        this._values = Object.fromEntries(
            Object.entries(target).map(([key, value]) => [key, new ObservableValue(value)])
        );
    }

    get(target: any, property: string) {
        if (!this.hasProperty(property)) {
            return;
        }

        if (isFunction(target[property])) {
            return target[property];
        }

        return this._values[property].get();
    }

    set(target: any, property: string, value: any) {
        if (this.hasProperty(property)) {
            this._values[property].set(value);
            return true;
        }

        if (isFunction(target[property])) {
            target[property] = value;
            return true;
        }

        this._values[property] = new ObservableValue(value);
        target[property] = value;

        return true;
    }

    private hasProperty(property: string) {
        return property in this._target;
    }
}

export function observableObject(target: any) {
    Object.defineProperty(target, $$observableAdmin, {
        enumerable: false,
        configurable: false,
        writable: false,
        value: new ObservableObject(target)
    });

    return new Proxy(target, {
        get(...args) {
            return target[$$observableAdmin].get(...args);
        },
        set(...args) {
            return target[$$observableAdmin].set(...args);
        }
    });
}
