import React from 'react'
import { render, screen } from '@testing-library/react'
import { PaginationComponent } from './Pagination'

describe('Pagination', () => {
  let DOM: any, container: any
  const rend = (cp: number) =>
    render(
      <PaginationComponent
        currentPage={cp}
        countItem={20}
        countAllItems={1000}
        changeCurrentPage={() => {}}
      />
    )
  beforeEach(() => {
    DOM = rend(1)
    container = DOM.container
  })
  it('Should contains class undefined', () => {
    expect(container.querySelector('.undefined')).toBeInTheDocument()
  })
  it('Should contains class disabled', () => {
    expect(container.querySelector('.disabled')).toBeInTheDocument()
  })
  it('Should contains class active', () => {
    expect(container.querySelector('.active')).toBeInTheDocument()
  })
  it('Should contains classes', () => {
    const items = container.querySelectorAll('li')
    expect(items[0]).toHaveClass('disabled')
    expect(items[1]).toHaveClass('disabled')
    expect(items[2]).toHaveClass('active')
  })
  it('Should contains not classes', () => {
    const { container } = rend(2)
    const items = container.querySelectorAll('li')
    expect(items[0]).not.toHaveClass('disabled')
    expect(items[1]).not.toHaveClass('disabled')
    expect(items[2]).not.toHaveClass('active')
    expect(items[3]).toHaveClass('active')
  })
})
