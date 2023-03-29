import { AnyState, PlainAction } from '../../myredux';
import { BaseService } from './baseService';

export class Service extends BaseService {
    getCounter() {
        return this.getState().counter;
    }

    getIsLoading() {
        return this.getState().isLoading;
    }

    getMessage() {
        return this.getState().message;
    }

    increaseCounter() {
        this.dispatch({
            type: 'INCREASE_COUNTER'
        });
    }

    decreaseCounter() {
        this.dispatch({
            type: 'DECREASE_COUNTER'
        });
    }

    setLoading(loading: boolean, message: String) {
        this.dispatch({
            type: 'SET_LOADING',
            payload: {
                loading,
                message
            }
        });
    }

    load() {
        this.setLoading(true, 'Loading ' + this.getCounter() + ' item')
    
        setTimeout(() => {
            this.setLoading(true, this.getCounter() + ' was loaded');
        }, 3000);
    }

    static reducer(state: AnyState, action: PlainAction) {
        switch (action.type) {
            case 'INCREASE_COUNTER': {
                return { ...state, counter: state.counter + 1 }
            }
            case 'DECREASE_COUNTER': {
                return { ...state, counter: state.counter - 1 }
            }
            case 'SET_LOADING': {
                return { ...state, isLoading: action.payload.loading, message: action.payload.message }
            }
            default:
                return state;
        }
    };
}
