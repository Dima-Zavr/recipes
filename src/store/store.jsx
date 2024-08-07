import { combineReducers, createStore } from "redux"
import { allReducer } from "./all-reducer"
import { myReducer } from "./my-reducer"
import { likeReducer } from "./like-reducer"

const Reducers = combineReducers({
    all: allReducer,
    my: myReducer,
    like: likeReducer
})

export const store = createStore(Reducers)
