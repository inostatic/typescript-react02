import {SELECT_DATA} from "./select"

export interface ISelectDateAC {
    type: typeof SELECT_DATA
    payload: string
}

export const selectDataAC = (payload: string): ISelectDateAC => ({
    type: SELECT_DATA,
    payload
})