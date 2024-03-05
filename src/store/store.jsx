import {createStore, combineReducers} from "redux";
import {allReducer} from "./all-reducer";
import {myReducer} from "./my-reducer";
import {favouriteReducer} from "./favourite-reducer";

const Reducers = combineReducers({
    all: allReducer,
    my: myReducer,
    favourite: favouriteReducer
})

export const store = createStore(Reducers);

