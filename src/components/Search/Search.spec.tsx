import React from 'react'
import { render, screen } from '@testing-library/react'
import { Search } from './Search'

describe('Search', () => {
  let DOM: any, getByText: any, container: any
  beforeEach(() => {
    DOM = render(<Search searchByString={() => {}} />)
    getByText = DOM.getByText
    container = DOM.container
  })
  it('Should contains text', () => {
    expect(getByText('Найти')).toBeInTheDocument()
  })
  it('Should contains class button', () => {
    expect(container.querySelector('.button')).toBeInTheDocument()
  })
  it('Should contains class br-search', () => {
    expect(container.querySelector('.br-search')).toBeInTheDocument()
  })
  it('Should contains class search-form', () => {
    expect(container.querySelector('.search-form')).toBeInTheDocument()
  })
})
