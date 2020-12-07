export type keyType = 'id' | 'firstName' | 'lastName' | 'email' | 'phone'
export type dataType = Array<ITableItem>

export type sortType = {
  key: keyType
  flag: boolean
}

export interface IDataSort {
  key: keyType
  flag: boolean
}


interface IAddress {
  streetAddress: string
  city: string
  state: string
  zip: string
}

export interface IRow {
  id: number
  firstName: string
  lastName: string
  email: string
  phone: string
}

export interface ITableItem {
  id: number
  firstName: string
  lastName: string
  email: string
  phone: string
  address?: IAddress
  description?: string

}

export interface ISelectedRow {
  id: number
  firstName: string
  lastName: string
  address?: {
    streetAddress: string
    city: string
    state: string
    zip: string
  }
  description?: string
}

export interface IStateData {
  dataSize: null | string,
  data: dataType,
  dataReserve: dataType,
  items: dataType,
  countItem: number,
  countAllItems: number
  currentPage: number,
  countPages: number,
  selectedRow: undefined | ISelectedRow,
  isLoaded: boolean
  error: string
}