import React from 'react'
import { render, screen } from '@testing-library/react'
import { TableRow } from './TableRow'

describe('TableHeader', () => {
  const rend = () =>
    render(
      <TableRow
        id={23}
        firstName={'firstName'}
        lastName={'lastName'}
        email={'email'}
        phone={'phone'}
        selectedRow={undefined}
      />
    )
  let DOM: any, getByText: any, container: any
  beforeEach(() => {
    DOM = rend()
    getByText = DOM.getByText
    container = DOM.container
  })
  it('Should contains text firstName', () => {
    expect(getByText(/firstName/)).toBeInTheDocument()
  })
  it('Should contains text lastName', () => {
    expect(getByText(/lastName/)).toBeInTheDocument()
  })
  it('Should contains text id', () => {
    expect(getByText(/23/)).toBeInTheDocument()
  })
  it('Should contains text email', () => {
    expect(getByText(/email/)).toBeInTheDocument()
  })
  it('Should contains text phone', () => {
    expect(getByText(/phone/)).toBeInTheDocument()
  })
  it('Should contains class table-row', () => {
    expect(container.querySelector('.table-row')).toBeInTheDocument()
  })
  it('Should contains class table-row__item', () => {
    expect(container.querySelector('.table-row__item')).toBeInTheDocument()
  })
  it('Should contains class table-row__item', () => {
    expect(container.querySelector('.table-row__item')).toBeInTheDocument()
  })
  it('Should contains dataset', () => {
    expect(
      container.querySelector('.table-row').getAttribute('data-item')
    ).toBe('23')
  })
})
