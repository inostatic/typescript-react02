import React from 'react'
import { render, screen } from '@testing-library/react'
import { Header } from './Header'
import userEvent from '@testing-library/user-event'
import routeData from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'

const mockLocation = {
  pathname: '/',
  hash: '',
  search: '',
  state: '',
}

describe('Header', () => {
  let DOM: any
  beforeEach(() => {
    jest.spyOn(routeData, 'useLocation').mockReturnValue(mockLocation)
    DOM = render(
      <Router>
        <Header />
      </Router>
    )
  })
  it('Should contains text Home', () => {
    const { getByText } = DOM
    expect(getByText('Home')).toBeInTheDocument()
  })
  it('Should contains text About', () => {
    const { getByText } = DOM
    expect(getByText('About')).toBeInTheDocument()
  })
  it('Should contains class header', () => {
    const { container } = DOM
    expect(container.querySelector('.header')).toBeInTheDocument()
  })
  it('Should contains class header__item', () => {
    const { container } = DOM
    expect(container.querySelector('.header__item')).toBeInTheDocument()
  })
  it('Should contains class active', () => {
    const { container } = DOM
    expect(container.querySelector('.active')).toBeInTheDocument()
  })
  it('Should contains  links', () => {
    const { container } = DOM
    expect(container.querySelectorAll('a').length).toBe(2)
  })
  it('Should changed active link', () => {
    const { container } = DOM
    const [Home, About] = container.querySelectorAll('a')
    expect(Home).toHaveClass('active')
    expect(About).not.toHaveClass('active')
    userEvent.click(About)
    expect(About).toHaveClass('active')
  })
})
