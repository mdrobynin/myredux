import { Action, AnyState } from '../../myredux';

export abstract class BaseService {
    dispatch: (action: Action<AnyState>) => void = () => void 0;
    getState: () => AnyState = () => ({});
    static reducer(state: AnyState, _: Action<AnyState>): AnyState {
        return state;
    };
}
