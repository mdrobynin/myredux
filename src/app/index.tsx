import React from 'react';

import { connect, Provider } from '../myredux';
import { store } from './store';
import { increaseCounter, decreaseCounter } from './actions';

interface Props {
    value: number;
}

interface StateProps {
    counter: number;
}

interface DispatchProps {
    increase: () => void;
    decrease: () => void;
}

const ConnectedComponent1 = ({ counter, increase, decrease }: StateProps & DispatchProps & Props) => {
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

const Component1 = connect<StateProps, DispatchProps, Props>(
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
            <Component1 value={123} />
            <Component2 />
        </Provider>
    );
};
