import {
  DATA_SORT,
  SELECTED_ROW,
  SEND_FORM,
  SET_DATA,
  SET_PAGINATION,
  DATA_SEARCH,
  SET_LOADING,
  SELECT_DATA,
  CLEAR_DATA,
  ERROR,
} from './data'
import { dataType, IDataSort, IRow } from '../../../types'

interface ISetLoader {
  type: typeof SET_LOADING
  payload: boolean
}

interface ISetData {
  type: typeof SET_DATA
  payload: dataType
}

interface ISetItem {
  type: typeof SET_PAGINATION
  payload?: number
}

interface ISelectedItem {
  type: typeof SELECTED_ROW
  payload: number
}

interface ISortBy {
  type: typeof DATA_SORT
  payload: IDataSort
}

interface ISendForm {
  type: typeof SEND_FORM
  payload: IRow
}

interface ISearchByStr {
  type: typeof DATA_SEARCH
  payload: string
}

interface IClearData {
  type: typeof CLEAR_DATA
}

interface ISelectDate {
  type: typeof SELECT_DATA
  payload: string
}

interface IERROR {
  type: typeof ERROR
  payload: string
}

export type ActionTypes =
  | ISearchByStr
  | ISendForm
  | ISortBy
  | ISelectedItem
  | ISetItem
  | ISetLoader
  | ISetData
  | ISelectDate
  | IClearData
  | IERROR
