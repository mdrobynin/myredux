import React from 'react';

import { connect, Provider } from '../myredux';
import { store } from './store';
import { increaseCounter, decreaseCounter, loadingAction } from './actions';
import { ThunkProps } from '../myredux/types';

interface Props {
    value: number;
}

interface StateProps {
    counter: number;
    isLoading: boolean;
}

interface DispatchProps {
    increase: () => void;
    decrease: () => void;
    load: () => void;
}

const ConnectedComponent1 = ({ counter, isLoading, increase, decrease, load }: StateProps & DispatchProps & Props) => {
    console.log('rendered Component1');

    return (
        <div>
            <div>
                <button onClick={increase}>increase</button>
            </div>
            <div>
                <button onClick={decrease}>decrease</button>
            </div>
            <div>
                <button onClick={load}>load</button>
            </div>
            <div>
                {counter}
            </div>
            <div>{isLoading ? 'Loading....' : ''}</div>
        </div>
    );
};

function loadThunk({ getState, dispatch }: ThunkProps) {
    dispatch(loadingAction(true));

    setTimeout(() => {
        dispatch(loadingAction(false));
    }, 3000);
}

const Component1 = connect<StateProps, DispatchProps, Props>(
    state => ({
        counter: state.counter,
        isLoading: state.isLoading
    }),
    dispatch => ({
        increase: () => dispatch(increaseCounter),
        decrease: () => dispatch(decreaseCounter),
        load: () => dispatch(loadThunk),
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
