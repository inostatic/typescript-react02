import React from 'react'
import { render } from '@testing-library/react'
import { App } from './App'


describe('App', () => {
  let container: any, getByRole: any, getByText: any, DOM: any
  beforeEach(() => {
    DOM =  render(<App />)
    container = DOM.container
    getByRole = DOM.getByRole
    getByText = DOM.getByText
  })
  it('Should contains class app', () => {
    expect(container.querySelector('.app')).toBeInTheDocument()
  })
  it('Should contains class header', () => {
    expect(container.querySelector('.header')).toBeInTheDocument()
  })
  it('Should contains class data', () => {
    expect(container.querySelector('.data')).toBeInTheDocument()
  })
  it('Should contains class navbar__container', () => {
    expect(container.querySelector('.navbar__container')).toBeInTheDocument()
  })
  it('Should contains class navbar__title', () => {
    expect(container.querySelector('.navbar__title')).toBeInTheDocument()
  })
  it('Should contains class loader', () => {
    expect(container.querySelector('.loader')).toBeInTheDocument()
  })
  it('Should contains class error', () => {
    expect(container.querySelector('.error')).toBeInTheDocument()
  })
  it('Should contains class header__item', () => {
    expect(container.querySelector('.header__item')).toBeInTheDocument()
  })
  it('Should contains class navbar', () => {
    expect(container.querySelector('.navbar')).toBeInTheDocument()
  })
  it('Should contains class button', () => {
    expect(container.querySelector('.button')).toBeInTheDocument()
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
  it('Should contains class loader_none', () => {
    expect(container.querySelector('.loader_none')).toBeInTheDocument()
  })
})