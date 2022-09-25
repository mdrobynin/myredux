import React from 'react';

import { AnyState, MapStateToPropsType, MapDispatchToPropsType } from './types';
import { useStore } from './useStore';

export function connect<
    StateProps extends AnyState = AnyState,
    DispatchProps extends AnyState = AnyState,
    OwnProps = {},
    State extends AnyState = AnyState
>(
    mapStateToProps: MapStateToPropsType<State, StateProps>,
    mapDispatchToProps: MapDispatchToPropsType<State, DispatchProps>,
) {
    const connectWrapper = (Component: (props: OwnProps & StateProps & DispatchProps) => JSX.Element) => (props: OwnProps) => {
        const { mappedState, mappedDispatch } = useStore(mapStateToProps, mapDispatchToProps);;

        return <Component {...props} {...mappedState} {...mappedDispatch} />;
    };

    return connectWrapper;
}