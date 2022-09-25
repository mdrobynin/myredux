import React from 'react';

import { connect, Provider, StateProps } from '../myredux';
import { store } from './store';
import { increaseCounter, decreaseCounter } from './actions';

const ConnectedComponent1 = ({ counter, increase, decrease }: StateProps) => {
    console.log('rendered Component1');

    return (
        <div>
            <button onClick={increase}>increase</button>
            <button onClick={decrease}>decrease</button>
            <div>
                {counter}
            </div>
        </div>
    );
};

const Component1 = connect(
    state => ({ counter: state.counter }),
    dispatch => ({
        increase: () => dispatch(increaseCounter),
        decrease: () => dispatch(decreaseCounter),
    }),
)(ConnectedComponent1);

const Component2 = () => {
    console.log('rendered Component2');

    return (
        <div>
            123
        </div>
    );
};


export const App = () => {
    return (
        <Provider store={store}>
            <Component1 />
            <Component2 />
        </Provider>
    );
};
