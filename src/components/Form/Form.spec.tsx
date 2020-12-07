import React from 'react'
import { render, screen } from '@testing-library/react'
import { Form } from './Form'
import userEvent from '@testing-library/user-event'

describe('Form', () => {
  let container: any, getByRole: any, getByText: any, DOM: any
  beforeEach(() => {
    DOM =  render(<Form sendForm={() => {}} />)
    container = DOM.container
    getByRole = DOM.getByRole
    getByText = DOM.getByText
  })
  it('Should contains button', () => {
    expect(getByRole('button')).toBeInTheDocument()
  })
  it('Should contains class form-add', () => {
    expect(container.querySelector('.form-add')).toBeInTheDocument()
  })
  it('Should contains class form-add__container', () => {
    const button = getByRole('button')
    userEvent.click(button)
    expect(container.querySelector('.form-add__container')).toBeInTheDocument()
    expect(getByText('Закрыть форму')).toBeInTheDocument()
  })
  it('Should contains class form-add__input', () => {
    const button = getByRole('button')
    userEvent.click(button)
    expect(container.querySelector('.form-add__input')).toBeInTheDocument()
  })
  it('Should contains class form-add__input', () => {
    const button = getByRole('button')
    userEvent.click(button)
    expect(container.querySelector('.form-add__input')).toBeInTheDocument()
  })
  it('Should contains class form-add__btn', () => {
    const button = getByRole('button')
    userEvent.click(button)
    expect(container.querySelector('.form-add__btn')).toBeInTheDocument()
  })
  it('Should contains class button_disabled', () => {
    const button = getByRole('button')
    userEvent.click(button)
    expect(container.querySelector('.button_disabled')).toBeInTheDocument()
  })
  it('Should not contains class button_disabled', () => {
    const button = getByRole('button')
    userEvent.click(button)
    const inputs = container.querySelectorAll('input')
    inputs.forEach((e: any) => userEvent.type(e, '123'))
    expect(container.querySelector('.button_disabled')).not.toBeInTheDocument()
  })
  it('Form should be closed', () => {
    const button = getByRole('button')
    userEvent.click(button)
    const btns = container.querySelectorAll('button')
    userEvent.click(btns[0])
    expect(container.querySelector('.form-add__btn')).not.toBeInTheDocument()
    expect(getByText('Открыть форму')).toBeInTheDocument()
  })
})
