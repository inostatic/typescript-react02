import {combineReducers, compose, createStore, applyMiddleware, Action} from "redux"
import thunk, {ThunkAction} from "redux-thunk"
import {data} from "./reducers/data/data";
import {select} from "./reducers/select/select";



let rootReducer = combineReducers({
 data,
 select
})

export type AppState = ReturnType<typeof rootReducer>


const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))

)

export type BaseThunkType<A extends Action, R = void> = ThunkAction<R, AppState, unknown, A>