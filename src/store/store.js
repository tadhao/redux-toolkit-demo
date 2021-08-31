import { createStore } from "redux";

const initialState = {
    counter: 0,
    hideCounter: false
}
const funReducer = (state = initialState, action) => {
    if(action.type == "inc") {
        return {counter: state.counter + action.abc, hideCounter: false}
    }
    if(action.type == "dec") {
        return {counter: state.counter - 1, hideCounter: false}
    }
    if(action.type == "hideCounter") {
        return {counter: state.counter, hideCounter: true}
    }

    return state
}

const store = createStore(funReducer)

export default store