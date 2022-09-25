type ObjectState = { [key: string]: any };

export type OwnProps = ObjectState;
export type StateProps = ObjectState;
export type DispatchProps = { [key: string]: (...args: any) => void };
export type RootState = ObjectState;
export type Action = { type: string, payload?: any };

export type DispatchFn = (action: Action) => void;
export type MapStateToProps = ((state: RootState) => ObjectState) | null;
export type MapDispatchToProps = ((fn: DispatchFn) => DispatchProps) | null;
export type StoreReducer = (state: StateProps, action: Action) => StateProps;

export type ConnectedElementProps = OwnProps & StateProps & DispatchProps;
export type ConnectedElement = (props: ConnectedElementProps) => JSX.Element;

export type Subscriber<T> = (args: T) => void; 