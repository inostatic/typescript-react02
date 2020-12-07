import React from 'react'
import { render, screen } from '@testing-library/react'
import { Loader } from './Loader'

describe('Loader', () => {
  it('Should contains img', () => {
    const { getByRole } = render(<Loader isDisabled={true} />)
    expect(getByRole('img')).toBeInTheDocument()
  })
  it('Should contains class loader', () => {
    const { container } = render(<Loader isDisabled={true} />)
    expect(container.querySelector('.loader')).toBeInTheDocument()
  })
  it('Should contains class loader_none', () => {
    const { container } = render(<Loader isDisabled={false} />)
    expect(container.querySelector('.loader_none')).toBeInTheDocument()
  })
})
