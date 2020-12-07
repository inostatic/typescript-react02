import {
  CLEAR_DATA,
  DATA_SEARCH,
  DATA_SORT,
  SELECT_DATA,
  SELECTED_ROW,
  SEND_FORM,
  SET_DATA,
  SET_LOADING,
  SET_PAGINATION,
  ERROR,
} from './data'
import { fetchData } from '../../../API/api'
import { dataType, IDataSort, IRow } from '../../../types'
import { ActionTypes } from './actionTypes'
import { BaseThunkType } from '../../createStore'

type ThunkType = BaseThunkType<ActionTypes>

export const getData = (db: string): ThunkType => async (dispatch) => {
  try {
    dispatch(setLoaderAC(true))
    dispatch(setErrorAC(''))
    const response = await fetchData(db)
    if (response && response.data) {
      dispatch(setDataAC(response.data))
      dispatch(setPaginationAC())
    }
    dispatch(setLoaderAC(false))
  } catch (e) {
    dispatch(clearDataAC())
    dispatch(setErrorAC(e.message))
    dispatch(setLoaderAC(false))
  }
}

export const setLoaderAC = (payload: boolean): ActionTypes => ({
  type: SET_LOADING,
  payload,
})

export const selectDataAC = (payload: string): ActionTypes => ({
  type: SELECT_DATA,
  payload,
})

export const setDataAC = (payload: dataType): ActionTypes => ({
  type: SET_DATA,
  payload,
})

export const setPaginationAC = (payload?: number): ActionTypes => ({
  type: SET_PAGINATION,
  payload,
})

export const selectedItemAC = (payload: number): ActionTypes => ({
  type: SELECTED_ROW,
  payload,
})

export const sendFormAc = (payload: IRow): ActionTypes => ({
  type: SEND_FORM,
  payload,
})

export const sortByAC = (payload: IDataSort): ActionTypes => ({
  type: DATA_SORT,
  payload,
})

export const searchByStrAC = (payload: string): ActionTypes => ({
  type: DATA_SEARCH,
  payload,
})

export const clearDataAC = (): ActionTypes => ({
  type: CLEAR_DATA,
})

export const setErrorAC = (payload: string): ActionTypes => ({
  type: ERROR,
  payload,
})
