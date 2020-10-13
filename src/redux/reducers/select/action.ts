import {SELECT_DATA, SELECT_PAGE} from "./select"

interface ISelectDateAC {
    type: typeof SELECT_DATA
    payload: string
}

interface ISelectPageAC {
    type: typeof SELECT_PAGE
    payload: string
}

export const selectDataAC = (payload: string): ISelectDateAC => ({
    type: SELECT_DATA,
    payload
})

export const selectPageAC = (payload: string): ISelectPageAC => ({
    type: SELECT_PAGE,
    payload
})

export type ActionSelectType = ISelectDateAC | ISelectPageAC