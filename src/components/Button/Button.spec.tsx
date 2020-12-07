import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from './Button'

describe('Button', () => {
  it('render Button component', () => {
    const { getByRole } = render(<Button text={'submit'} onSubmit={() => {}} />)
    expect(getByRole('button')).toBeInTheDocument()
  })
  it('Should contains button name', () => {
    const { getByText } = render(<Button text={'submit'} onSubmit={() => {}} />)
    expect(getByText('submit')).toBeInTheDocument()
  })
  it('Should contains class button', () => {
    const { getByRole } = render(<Button text={'submit'} onSubmit={() => {}} />)
    expect(getByRole('button')).toHaveClass('button')
  })
  it('Should contains class btn_mod', () => {
    const { getByRole } = render(
      <Button text={'submit'} onSubmit={() => {}} style={{ btn_mod: true }} />
    )
    expect(getByRole('button')).toHaveClass('btn_mod')
  })
  it('Should contains class button_disabled', () => {
    const { getByRole } = render(
      <Button text={'submit'} onSubmit={() => {}} isDisabled={true} />
    )
    expect(getByRole('button')).toHaveClass('button_disabled')
  })
  it('Should contains attribute disabled', () => {
    const { getByRole } = render(
      <Button text={'submit'} onSubmit={() => {}} isDisabled={true} />
    )
    expect(getByRole('button')).toHaveAttribute('disabled')
  })
  it('Should clicked on button', () => {
    const onClick = jest.fn()
    const { getByRole } = render(<Button text={'submit'} onSubmit={onClick} />)
    const button = getByRole('button')
    userEvent.click(button)
    expect(onClick).toBeCalled()
  })
})
