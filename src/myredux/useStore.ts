import { useState, useContext, useEffect, useCallback } from 'react';

import { StoreContext } from './context';
import { Store } from './store';
import { Action, AnyDispatch, AnyState, MapDispatchToPropsType, MapStateToPropsType } from './types';

export function useStore<
    S extends AnyState = AnyState,
    T extends AnyState = AnyState,
    K extends AnyDispatch = AnyDispatch,
>(
    mapStateToProps: MapStateToPropsType<S, T>,
    mapDispatchToProps: MapDispatchToPropsType<S, K>,
) {
    const store = useContext(StoreContext) as unknown as Store<S>;
    const [state, setState] = useState<S>({} as S);

    const dispatch = useCallback((action: Action<S>) => store.dispatch(action), [store])
    
    useEffect(() => {
        store.subscribe((state: AnyState) => setState(state as S));
    }, []);

    return {
        mappedState: (mapStateToProps ? mapStateToProps(state) : {}) as T,
        mappedDispatch: (mapDispatchToProps ? mapDispatchToProps(dispatch) : {}) as K,
    };
}
