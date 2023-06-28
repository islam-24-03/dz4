const initialState = {
    counter: 1,
    abc: 1
}

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCR_COUNTER':
            return { ...state, counter: state.counter + action.payload }
        case 'DECR_COUNTER':
            return state - 1
        default:
            return state
    }
}

export const incrCounter = (payload) => (
    { type: 'INCR_COUNTER', payload: payload }
)


