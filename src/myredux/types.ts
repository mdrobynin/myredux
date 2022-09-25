export type AnyState = { [key: string]: any };
export type AnyDispatch = { [key: string]: () => void };
export type Action = { type: string, payload?: any };
export type Reducer<State> = (state: State, action: Action) => State;

export type MapStateToPropsType<S extends AnyState, T extends AnyState> = ((state: S) => T) | null;
export type MapDispatchToPropsType<S extends AnyDispatch> = ((dispatch: (action: Action) => void) => S) | null;
