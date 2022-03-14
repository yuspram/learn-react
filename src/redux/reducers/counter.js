const initialState = { value: 0}

function counterReducer(state = initialState, action) {
    switch (action) {
        case action.type === 'ADD_COUNTER':
            state.value =+1
            break;
    
        default:
            return state
    }
}

export default counterReducer