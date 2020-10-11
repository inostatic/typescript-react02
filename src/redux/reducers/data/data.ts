import {IStateData, keyType, dataType} from "../../../types"
import {ActionTypes} from './actionDataTypes'


export const SET_LOADING = "SET_LOADING"
export const SET_DATA = "SET_DATA"
export const SET_PAGINATION = "SET_PAGINATION"
export const SELECTED_ROW = "SELECTED_ROW"
export const SEND_FORM = "SEND_FORM"
export const DATA_SORT = "DATA_SORT"
export const DATA_SEARCH = "DATA_SEARCH"



const initialState: IStateData = {
    data: [],
    dataReserve: [],
    items: [],
    countItem: 50,
    countAllItems: 0,
    currentPage: 1,
    countPages: 0,
    selectedRow: undefined,
    isLoaded: false
}




const sortByKey = (key: keyType, data: dataType): dataType => {
    return data.sort((prev, next): any  => {
        if (prev[key] < next[key]) return -1
        if (prev[key] < next[key]) return 1
        return undefined
    })
}


const searchByString = (data: dataType, str: string): dataType => {
    return data.filter(elem => {
        return (
            (String(elem.id).toLowerCase().indexOf(str) !== -1)
            || (elem.firstName.toLowerCase().indexOf(str) !== -1)
            || (elem.lastName.toLowerCase().indexOf(str) !== -1)
            || (elem.email.toLowerCase().indexOf(str) !== -1)
            || (elem.phone.toLowerCase().indexOf(str) !== -1)
        )
    })
}

const getCountPages = (data: dataType, countItem: number): number => Math.ceil(data.length / countItem)
const getItems = (data: dataType, currentPage: number, countItem: number): dataType => data.slice((currentPage - 1) * countItem, currentPage * countItem)

export const data = (state = initialState, action: ActionTypes): IStateData => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                isLoaded: false
            }

        case SET_DATA:
            return {
                ...state,
                data: action.payload,
                dataReserve: action.payload,
                countAllItems: action.payload.length,
                currentPage: 1,
                isLoaded: true
            }

        case SET_PAGINATION:
            const currentPage = action.payload || state.currentPage
            return {
                ...state,
                currentPage: +currentPage,
                countPages: getCountPages(state.data, state.countItem),
                items: getItems(state.data, currentPage, state.countItem)
            }

        case SELECTED_ROW:
            const target = state.selectedRow ? state.selectedRow.id : null
            if(target === +action.payload) {
                return {
                    ...state,
                    selectedRow: undefined
                }
            }
            const selectedRow = state.items.find((item) => +item.id === +action.payload)
            return {
                ...state,
                selectedRow
            }

        case SEND_FORM:
            const data = [action.payload, ...state.data]
            return {
                ...state,
                data,
                items: getItems(data, state.currentPage, state.countItem),
                countPages: getCountPages(data, state.countItem),
                dataReserve: [action.payload, ...state.dataReserve]
            }

        case DATA_SORT:
            const key = action.payload.key
            let newData
            action.payload.flag
                ? newData = sortByKey(key, state.data).reverse()
                : newData = sortByKey(key, state.data)

            return {
                ...state,
                data: newData,
                items: getItems(newData, state.currentPage, state.countItem)
            }

        case DATA_SEARCH:
            if (action.payload === '') {
                return {
                    ...state,
                    items: getItems(state.dataReserve, 1, state.countItem),
                    currentPage: 1,
                    data: state.dataReserve,
                    countPages: getCountPages(state.dataReserve, state.countItem),
                }
            }
            const searchData = searchByString(state.dataReserve, action.payload.toLowerCase())
            return {
                ...state,
                data: searchData,
                items: getItems(searchData, 1, state.countItem),
                currentPage: 1,
                countPages: getCountPages(searchData, state.countItem)

            }
        default:
            return state
    }

}
