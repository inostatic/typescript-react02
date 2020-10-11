import {DATA_SORT, SELECTED_ROW, SEND_FORM, SET_DATA, SET_PAGINATION, DATA_SEARCH, SET_LOADING} from "./data"
import {fetchData} from "../../../API/api"
import {dataType, IDataSort, IRow} from "../../../types";
import {ActionTypes} from './actionDataTypes'
import {BaseThunkType} from '../../createStore'

type ThunkType = BaseThunkType<ActionTypes>

export const getData = (db: null | string): ThunkType => async (dispatch) => {
    try {
        dispatch(setLoaderAC())
        const data = await fetchData(db)
        if (data) {
            await dispatch(setDataAC(data.data))
            await dispatch(setItemAC())
        }
    } catch (e) {
        throw new Error(e)
    }
}


export const setLoaderAC = (): ActionTypes => ({type: SET_LOADING})

export const setDataAC = (payload: dataType): ActionTypes => ({
    type: SET_DATA,
    payload
})

export const setItemAC = (payload?: number): ActionTypes => ({
    type: SET_PAGINATION,
    payload
})

export const selectedItemAC = (payload: number): ActionTypes => ({
    type: SELECTED_ROW,
    payload
})

export const sendFormAc = (payload: IRow): ActionTypes => ({
    type: SEND_FORM,
    payload
})

export const sortByAC = (payload: IDataSort): ActionTypes => ({
    type: DATA_SORT,
    payload
})

export const searchByStrAC = (payload: string): ActionTypes => ({
    type: DATA_SEARCH,
    payload
})