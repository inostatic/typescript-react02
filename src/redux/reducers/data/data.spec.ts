import { data as dataReducer } from './data'
import {
  searchByStrAC,
  selectedItemAC,
  sendFormAc,
  setDataAC,
  setPaginationAC,
  setLoaderAC,
  sortByAC,
  setErrorAC,
  clearDataAC,
} from './action'
import { dataType, IStateData, ITableItem, IRow } from '../../../types'

describe('data reducer', () => {
  let initialState: IStateData,
    data: dataType,
    item1: ITableItem,
    itemForm: IRow,
    item2: ITableItem
  beforeEach(() => {
    initialState = {
      dataSize: null,
      data: [],
      dataReserve: [],
      items: [],
      countItem: 1,
      countAllItems: 0,
      currentPage: 1,
      countPages: 0,
      selectedRow: undefined,
      isLoaded: false,
      error: '',
    }
    itemForm = {
      id: 23,
      firstName: 'Sue',
      lastName: 'Corson',
      email: 'DWhalley@in.gov',
      phone: '(612)211-6296',
    }
    item1 = {
      id: 101,
      firstName: 'Sue',
      lastName: 'Corson',
      email: 'DWhalley@in.gov',
      phone: '(612)211-6296',
      address: {
        streetAddress: '9792 Mattis Ct',
        city: 'Waukesha',
        state: 'WI',
        zip: '22178',
      },
      description: 'et lacus magna dolor...',
    }
    item2 = {
      id: 19,
      firstName: 'Sue',
      lastName: 'Corson',
      email: 'DWhalley@in.gov',
      phone: '(612)211-6296',
      address: {
        streetAddress: '9792 Mattis Ct',
        city: 'Waukesha',
        state: 'WI',
        zip: '22178',
      },
      description: 'et lacus magna dolor...',
    }
    data = [item1, item1, item1, item2, item2, item2]
  })
  it('Should saved data in redux', () => {
    let action = setDataAC(data)
    let newState = dataReducer(initialState, action)
    expect(newState.data.length).toBe(6)
    expect(newState.data).toEqual(data)
  })
  it('Should enabled loader', () => {
    let action = setLoaderAC(true)
    let newState = dataReducer(initialState, action)
    expect(newState.isLoaded).toBe(true)
  })
  it('Should to search on line', () => {
    let prevAction = setDataAC(data)
    let prevNewState = dataReducer(initialState, prevAction)
    let action = searchByStrAC('Sue')
    let newState = dataReducer(prevNewState, action)
    expect(newState.data).toEqual(data)
  })
  it('Should selected string', () => {
    let prevAction = setDataAC(data)
    let prevNewState = dataReducer(initialState, prevAction)
    let action = selectedItemAC(101)
    let newState = dataReducer(prevNewState, action)
    if (newState.selectedRow) {
      expect(newState.selectedRow.id).toBe(101)
    }
  })
  it('Should submit form', () => {
    let action = sendFormAc(itemForm)
    let newState = dataReducer(initialState, action)
    expect(newState.data.length).toBe(1)
    expect(newState.data[0].id).toBe(23)
  })
  it('Should create pagination', () => {
    let prevAction = setDataAC(data)
    let prevNewState = dataReducer(initialState, prevAction)
    let action = setPaginationAC(3)
    let newState = dataReducer(prevNewState, action)
    expect(newState.currentPage).toBe(3)
  })
  it('Should sort on string', () => {
    let prevAction = setDataAC(data)
    let prevNewState = dataReducer(initialState, prevAction)
    let action = sortByAC({ key: 'id', flag: false })
    let newState = dataReducer(prevNewState, action)
    expect(newState.data[0].id).toBe(19)
  })
  it('Should saved error', () => {
    let action = setErrorAC('Error')
    let newState = dataReducer(initialState, action)
    expect(newState.error).toBe('Error')
  })
  it('Should reset state', () => {
    let prevAction = setDataAC(data)
    let prevNewState = dataReducer(initialState, prevAction)
    let action = clearDataAC()
    let newState = dataReducer(prevNewState, action)
    expect(newState.data.length).toBe(0)
  })
})
