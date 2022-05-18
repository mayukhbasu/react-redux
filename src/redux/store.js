import { combineReducers, createStore } from "redux";

import cakeReducer from "./cake/cakeReducer";
// eslint-disable-next-line
import CounterReducer from "./counter/CounterReducer";
import iceCreamreducer from "./iceCream/iceCreamReducer";
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamreducer
})
const store = createStore(rootReducer);
export default store;