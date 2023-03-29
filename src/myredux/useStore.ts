import { useState, useContext, useEffect, useCallback } from 'react';

import { StoreContext } from './context';
import { Store } from './store';
import { Action, AnyDispatch, AnyState, MapDispatchToPropsType, MapStateToPropsType } from './types';

export function useDispatch<S extends AnyState = AnyState>() {
    const store = useContext(StoreContext) as unknown as Store<S>;
    return useCallback((action: Action<S>) => store.dispatch(action), [store]);
}

export function useStoreState<S extends AnyState = AnyState>() {
    const store = useContext(StoreContext) as unknown as Store<S>;
    const [state, setState] = useState<S>({} as S);

    useEffect(() => {
        store.subscribe((state: AnyState) => setState(state as S));
    }, []);

    return state;
}

export function useStore<
    S extends AnyState = AnyState,
    T extends AnyState = AnyState,
    K extends AnyDispatch = AnyDispatch,
>(
    mapStateToProps: MapStateToPropsType<S, T>,
    mapDispatchToProps: MapDispatchToPropsType<S, K>,
) {
    const dispatch = useDispatch<S>();
    const state = useStoreState<S>();

    return {
        ...(mapStateToProps ? mapStateToProps(state) : {}) as T,
        ...(mapDispatchToProps ? mapDispatchToProps(dispatch) : {}) as K,
    };
}
