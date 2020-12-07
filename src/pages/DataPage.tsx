import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getData,
  searchByStrAC,
  selectedItemAC,
  sendFormAc,
  setPaginationAC,
  sortByAC,
} from '../redux/reducers/data/action'
import { Navbar } from '../components/Navbar/Navbar'
import { Form } from '../components/Form/Form'
import { TableHeader } from '../components/TableHeader/TableHeader'
import { TableRow } from '../components/TableRow/TableRow'
import { PaginationComponent } from '../components/Pagination/Pagination'
import { AppState } from '../redux/createStore'
import { Search } from '../components/Search/Search'
import { SelectedRow } from '../components/SelectedRow/SelectedRow'
import { sortType, ITableItem } from '../types'
import { selectDataAC, clearDataAC } from '../redux/reducers/data/action'

export const DataPage: React.FC = () => {
  const dispatch = useDispatch()
  const {
    dataSize,
    items,
    selectedRow,
    isLoaded,
    countItem,
    currentPage,
    countAllItems,
    error,
  } = useSelector((state: AppState) => state.data)

  useEffect(() => {
    if (dataSize) {
      dispatch(getData(dataSize))
    }
  }, [dataSize, dispatch])

  useEffect(() => {
    return () => {
      dispatch(clearDataAC())
    }
  }, [dispatch])

  const HandlerSearch = React.useCallback(
    (str: string): void => {
      dispatch(searchByStrAC(str))
    },
    [dispatch]
  )

  const selectedItem = (event: any): void => {
    let node = event.target.dataset.item || event.target.parentNode.dataset.item
    if (node) {
      dispatch(selectedItemAC(node))
    }
  }

  const HandlerSort = React.useCallback(
    (key: sortType): void => {
      dispatch(sortByAC(key))
    },
    [dispatch]
  )

  const HandlerPagination = React.useCallback(
    (str_id: number): void => {
      dispatch(setPaginationAC(str_id))
    },
    [dispatch]
  )

  const HandlerForm = React.useCallback(
    (obj: ITableItem): void => {
      dispatch(sendFormAc(obj))
    },
    [dispatch]
  )

  const HandlerDataSize = React.useCallback(
    (text: string): void => {
      dispatch(selectDataAC(text))
    },
    [dispatch]
  )

  return (
    <div className="data">
      <Navbar
        select={dataSize}
        HandlerDataSize={HandlerDataSize}
        isLoaded={isLoaded}
      />
      {<div className="error">{error}</div>}
      {!isLoaded && !!items.length && (
        <>
          <Form sendForm={HandlerForm} />
          <TableHeader HandlerSort={HandlerSort} dataSize={dataSize} />
          <div className="table__container" onClick={selectedItem}>
            {items.map((item, index) => (
              <TableRow {...item} key={index} selectedRow={selectedRow} />
            ))}
          </div>
          <Search searchByString={HandlerSearch} />
          <PaginationComponent
            countItem={countItem}
            currentPage={currentPage}
            changeCurrentPage={HandlerPagination}
            countAllItems={countAllItems}
          />
          {selectedRow && <SelectedRow {...selectedRow} />}
        </>
      )}
    </div>
  )
}
