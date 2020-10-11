import {DATA_SORT, SELECTED_ROW, SEND_FORM, SET_DATA, SET_PAGINATION, DATA_SEARCH, SET_LOADING} from "./data"
import {dataType, IDataSort, IRow} from '../../../types'


interface ISetLoaderAC {
    type: typeof SET_LOADING
}

interface ISetDataAC {
    type: typeof SET_DATA,
    payload: dataType
}

interface ISetItemAC {
    type: typeof SET_PAGINATION,
    payload?: number
}

interface ISelectedItemAC {
    type: typeof SELECTED_ROW,
    payload: number
}

interface ISortByAC {
    type: typeof DATA_SORT,
    payload: IDataSort
}

interface ISendFormAc {
    type: typeof SEND_FORM,
    payload: IRow
}

interface ISearchByStrAC {
    type: typeof DATA_SEARCH,
    payload: string
}

export type ActionTypes = ISearchByStrAC | ISendFormAc | ISortByAC |
    ISelectedItemAC | ISetItemAC | ISetLoaderAC | ISetDataAC