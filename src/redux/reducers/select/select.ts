import {ISelectDateAC} from "./action"

export const SELECT_DATA = "SELECT_DATA"


interface IStateSelect {
    select: null | string
}

let initialState: IStateSelect = {
    select: null
}

export const select = (state = initialState, action: ISelectDateAC): IStateSelect => {
    if (action.type === SELECT_DATA) {
        return {
            ...state,
            select: action.payload
        }
    }
    return state
}