import React from 'react'
import { render, screen } from '@testing-library/react'
import { Navbar } from './Navbar'

describe('Navbar first', () => {
  let getByText: any, container: any, DOM: any
  beforeEach(() => {
    DOM = render(
      <Navbar isLoaded={false} select={null} HandlerDataSize={() => {}} />
    )
    getByText = DOM.getByText
    container = DOM.container
  })
  it('Should contains text 1', () => {
    expect(getByText('Выберите набор данных:')).toBeInTheDocument()
  })
  it('Should contains text 2', () => {
    expect(getByText('Маленький')).toBeInTheDocument()
  })
  it('Should contains text 3', () => {
    expect(getByText('Большой')).toBeInTheDocument()
  })
  it('Should contains class navbar', () => {
    expect(container.querySelector('.navbar')).toBeInTheDocument()
  })
  it('Should contains class navbar__title', () => {
    expect(container.querySelector('.navbar__title')).toBeInTheDocument()
  })
  it('Should contains class loader', () => {
    expect(container.querySelector('.loader')).toBeInTheDocument()
  })
  it('Should contains class loader_none', () => {
    expect(container.querySelector('.loader_none')).toBeInTheDocument()
  })
  it('Should contains class navbar__container', () => {
    expect(container.querySelector('.navbar__container')).toBeInTheDocument()
  })
  it('Should contains class button', () => {
    expect(container.querySelectorAll('.button').length).toBe(2)
  })
})
