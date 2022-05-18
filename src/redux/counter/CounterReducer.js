import { DECREASE_NUMBER, INCREASE_NUMBER } from "./CounterActionTypes"

const initialState = {
    initNumber: 0
}

 const  counterReducer = (state = initialState, action) => {
    switch(action.type) {
        case INCREASE_NUMBER:
            return {
                ...state,
                initNumber: state.initNumber + 1
            }
        case DECREASE_NUMBER:
            return {
                ...state,
                initNumber: state.initNumber - 1

            }
        default: 
            return state
    }
}

export default counterReducer;