import { BUY_ICECREAM } from "./iceCreamActionTypes"

const initialState = {
    numOfIceCream: 100
}

const iceCreamreducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                numOfIceCream: state.numOfIceCream - 1
            }
            default: return state
    }
}

export default iceCreamreducer;