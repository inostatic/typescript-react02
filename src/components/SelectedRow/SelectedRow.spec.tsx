import React from 'react'
import { render, screen } from '@testing-library/react'
import { SelectedRow } from './SelectedRow'

describe('SelectRow', () => {
  let DOM: any, getByText: any, container: any
  beforeEach(() => {
    DOM = render(
      <SelectedRow
        id={1}
        firstName={'firstName'}
        lastName={'lastName'}
        description={'description'}
        address={{
          streetAddress: 'streetAddress',
          city: 'city',
          state: 'state',
          zip: 'zip',
        }}
      />
    )
    getByText = DOM.getByText
    container = DOM.container
  })
  it('Should contains text firstName', () => {
    expect(getByText(/firstName/)).toBeInTheDocument()
  })
  it('Should contains text lastName', () => {
    expect(getByText(/lastName/)).toBeInTheDocument()
  })
  it('Should contains text description', () => {
    expect(getByText('description')).toBeInTheDocument()
  })
  it('Should contains text streetAddress', () => {
    expect(getByText('streetAddress')).toBeInTheDocument()
  })
  it('Should contains text city', () => {
    expect(getByText('city')).toBeInTheDocument()
  })
  it('Should contains text state', () => {
    expect(getByText('state')).toBeInTheDocument()
  })
  it('Should contains text zip', () => {
    expect(getByText('zip')).toBeInTheDocument()
  })
  it('Should contains text Провинция/штат', () => {
    expect(getByText(/Провинция\/штат/)).toBeInTheDocument()
  })
  it('Should contains text Выбран пользователь', () => {
    expect(getByText(/Выбран пользователь/)).toBeInTheDocument()
  })
  it('Should contains text Описание', () => {
    expect(getByText(/Описание/)).toBeInTheDocument()
  })
  it('Should contains text Адрес проживания', () => {
    expect(getByText(/Адрес проживания/)).toBeInTheDocument()
  })
  it('Should contains text Индекс', () => {
    expect(getByText(/Индекс/)).toBeInTheDocument()
  })
  it('Should contains class info-container', () => {
    expect(container.querySelector('.info-container')).toBeInTheDocument()
  })
  it('Should contains class info-container__item', () => {
    expect(container.querySelector('.info-container__item')).toBeInTheDocument()
  })
})
