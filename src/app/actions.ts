export const increaseCounter = {
    type: 'INCREASE_COUNTER'
};

export const decreaseCounter = {
    type: 'DECREASE_COUNTER'
};

export const loadingAction = (loading: boolean) => ({
    type: 'SET_LOADING',
    payload: loading
});