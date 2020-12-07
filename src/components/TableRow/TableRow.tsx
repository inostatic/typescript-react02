import React from 'react'
import classNames from 'classnames'
import { ISelectedRow } from '../../types'

interface TableRowProps {
  id: number
  firstName: string
  lastName: string
  email: string
  phone: string
  selectedRow: undefined | ISelectedRow
}

export const TableRow: React.FC<TableRowProps> = React.memo(
  ({ id, firstName, lastName, email, phone, selectedRow }) => {
    const className = classNames({
      'table-row': true,
      selected: id === (selectedRow ? selectedRow.id : null),
    })

    return (
      <div className={className} data-item={id}>
        <div className="table-row__item">{id}</div>
        <div className="table-row__item">{firstName}</div>
        <div className="table-row__item">{lastName}</div>
        <div className="table-row__item">{email}</div>
        <div className="table-row__item">{phone}</div>
      </div>
    )
  }
)
