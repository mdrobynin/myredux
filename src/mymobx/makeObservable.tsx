import React from 'react';

const isPrimitive = (value: any) => (
    typeof value === 'string' || typeof value === 'boolean' || typeof value === 'number'
);

export const makeObservable = (object: any) => {
    Object.keys(object).forEach((key: string) => {
        if (isPrimitive(object[key])) {
            object[key] = new Proxy(object[key], {
                set(target, property, value) {
                    if (target[property] === value) {
                        return true;
                    }

                    target[property] = value;
                    return true;
                }
            })
        }
    });
};

class Store {
    value: string = '';
    counter: number = 0;
    flag: boolean = false;

    constructor() {
        makeObservable(this);
    }
}

const store = new Store();

const observer = (Component: (props: any) => JSX.Element) => {
    return <Component />
};

interface Props {
    smth: string;
}

export const Component = observer((props: Props) => {
    const increase = () => {
        store.counter += 1;
        store.value += store.counter + ' ';
        store.flag = !store.flag;
    };

    const decrease = () => {
        store.counter -= 1;
        store.value += store.counter + ' ';
        store.flag = !store.flag;
    };

    return (
        <div>
            <div>
                {props.smth}
            </div>
            <div>
                <button onClick={increase}>increase</button>
            </div>
            <div>
                <button onClick={decrease}>decrease</button>
            </div>
            <div>
                {store.flag}
            </div>
            <div>
                {store.value}
            </div>
            <div>
                {store.counter}
            </div>
        </div>
    );
});