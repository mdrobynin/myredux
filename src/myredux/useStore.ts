import { useState, useContext } from 'react';

import { Action, DispatchFn, MapDispatchToProps, MapStateToProps, StateProps } from './types';
import { StoreContext } from './context';

export function useStore(mapStateToProps: MapStateToProps, mapDispatchToProps: MapDispatchToProps) {
    const store = useContext(StoreContext);
    const [state, setState] = useState<StateProps>({});

    store.subscribe(setState);

    const dispatch: DispatchFn = (action: Action) => store.dispatch(action);
    const mappedState = (mapStateToProps ? mapStateToProps(state) : {});
    const mappedDispatch = (mapDispatchToProps ? mapDispatchToProps(dispatch) : {});

    return { mappedState, mappedDispatch };
}
