import React from 'react'
import Pagination from 'react-js-pagination'

interface PaginationProps {
  currentPage: number
  countItem: number
  countAllItems: number
  changeCurrentPage(id: number): void
}

export const PaginationComponent: React.FC<PaginationProps> = React.memo(
  ({ currentPage, countItem, changeCurrentPage, countAllItems }) => {
    return (
      <Pagination
        activePage={currentPage}
        itemsCountPerPage={countItem}
        totalItemsCount={countAllItems}
        pageRangeDisplayed={10}
        onChange={changeCurrentPage}
      />
    )
  }
)
