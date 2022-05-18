import { DECREASE_NUMBER, INCREASE_NUMBER } from "./CounterActionTypes"

export const increaseNumber = () => {
    return {
        type: INCREASE_NUMBER
    }
}

export const decreaseNumber = () => {
    return {
        type: DECREASE_NUMBER
    }
}