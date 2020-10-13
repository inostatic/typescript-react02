import {ActionSelectType} from "./action"

export const SELECT_DATA = "SELECT_DATA"
export const SELECT_PAGE = "SELECT_PAGE"


interface IStateSelect {
    select: null | string,
    path: string | null
}

let initialState: IStateSelect = {
    select: null,
    path: null
}

export const select = (state = initialState, action: ActionSelectType): IStateSelect => {
    if(action.type === SELECT_PAGE) {
        return {
            ...state,
            path: action.payload
        }
    }
    if (action.type === SELECT_DATA) {
        return {
            ...state,
            select: action.payload
        }
    }
    return state
}