export type AnyState = { [key: string]: any };

export type PlainAction = { type: string, payload?: any };
export type ThunkProps<S extends AnyState = AnyState> = { dispatch: (action: Action<S>) => void, getState: () => S };

export type AnyDispatch = { [key: string]: () => void };
export type Reducer<S extends AnyState> = (state: S, action: PlainAction) => S;

export type Thunk<S extends AnyState = AnyState> = (props: ThunkProps<S>) => void;
export type Action<S extends AnyState = AnyState> = PlainAction | Thunk<S>;

export type MapStateToPropsType<S extends AnyState, T extends AnyState> = ((state: S) => T) | null;
export type MapDispatchToPropsType<S extends AnyState, T extends AnyDispatch> = ((dispatch: (action: Action<S>) => void) => T) | null;
