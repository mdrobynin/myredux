export const increaseCounter = {
    type: 'INCREASE_COUNTER'
};

export const decreaseCounter = {
    type: 'DECREASE_COUNTER'
};

export const loadingAction = (loading: boolean, message: String) => ({
    type: 'SET_LOADING',
    payload: {
        loading,
        message
    }
});