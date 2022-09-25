import React from 'react';

import { OwnProps, MapStateToProps, MapDispatchToProps, ConnectedElementProps } from './types';
import { useStore } from './useStore';

export function connect(
    mapStateToProps: MapStateToProps,
    mapDispatchToProps: MapDispatchToProps,
) {
    const connectWrapper = (Component: (props: ConnectedElementProps) => JSX.Element) => (props: OwnProps) => {
        const { mappedState, mappedDispatch } = useStore(mapStateToProps, mapDispatchToProps);
        return <Component {...props} {...mappedState} {...mappedDispatch} />;
    };

    return connectWrapper;
}