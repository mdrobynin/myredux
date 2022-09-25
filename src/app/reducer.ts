import { StateProps, Action } from '../myredux';
import { increaseCounter, decreaseCounter } from './actions';

export const reducer = (state: StateProps, action: Action) => {
    switch (action.type) {
        case increaseCounter.type: {
            return { ...state, counter: state.counter + 1 }
        }
        case decreaseCounter.type: {
            return { ...state, counter: state.counter - 1 }
        }
        default:
            return state;
    }
};
