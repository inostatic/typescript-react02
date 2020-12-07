import React from 'react'
import { render, screen } from '@testing-library/react'
import { TableHeader } from './TableHeader'
import userEvent from '@testing-library/user-event'

describe('TableHeader', () => {
  let DOM: any, getByText: any, container: any
  beforeEach(() => {
    DOM = render(<TableHeader HandlerSort={() => {}} dataSize={null} />)
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
    expect(getByText(/id/)).toBeInTheDocument()
  })
  it('Should contains text email', () => {
    expect(getByText(/email/)).toBeInTheDocument()
  })
  it('Should contains text phone', () => {
    expect(getByText(/phone/)).toBeInTheDocument()
  })
  it('Should contains text arrow_drop_up', () => {
    expect(DOM.getAllByText(/arrow_drop_up/).length).toBe(5)
  })
  it('Should contains text arrow_drop_down', () => {
    expect(DOM.getAllByText(/arrow_drop_down/).length).toBe(5)
  })
  it('Should contains class table-header', () => {
    expect(container.querySelector('.table-header')).toBeInTheDocument()
  })
  it('Should contains class table-header', () => {
    expect(container.querySelector('.table-header')).toBeInTheDocument()
  })
  it('Should contains class table-header__item', () => {
    expect(container.querySelector('.table-header__item')).toBeInTheDocument()
  })
  it('Should contains class table-header__arrows', () => {
    expect(container.querySelector('.table-header__arrows')).toBeInTheDocument()
  })
  it('Should contains class material-icons', () => {
    expect(container.querySelector('.material-icons')).toBeInTheDocument()
  })
  it('Clicked on header', () => {
    const headers = container.querySelectorAll('.table-header__arrows')
    expect(headers.length).toBe(5)
    expect(headers[0]).toHaveClass('opacity')
    userEvent.click(headers[0])
    expect(headers[0]).not.toHaveClass('opacity')
    userEvent.click(headers[1])
    expect(headers[0]).toHaveClass('opacity')
  })
})
