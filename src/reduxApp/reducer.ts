import { AnyState, PlainAction } from '../myredux';
import { increaseCounter, decreaseCounter } from './actions';

export const reducer = (state: AnyState, action: PlainAction) => {
    switch (action.type) {
        case increaseCounter.type: {
            return { ...state, counter: state.counter + 1 }
        }
        case decreaseCounter.type: {
            return { ...state, counter: state.counter - 1 }
        }
        case 'SET_LOADING': {
            return { ...state, isLoading: action.payload.loading, message: action.payload.message }
        }
        default:
            return state;
    }
};
