import React from 'react'
import { Button } from '../Button/Button'
import { Loader } from '../Loader/Loader'

interface propsType {
  isLoaded: boolean
  select: string | null
  HandlerDataSize: (text: string) => void
}

export const Navbar: React.FC<propsType> = React.memo(
  ({ select, HandlerDataSize, isLoaded }) => {
    return (
      <nav className="navbar">
        <div className="navbar__container">
          <div className="navbar__title">Выберите набор данных:</div>
          <Button
            text={'Большой'}
            isActive={select}
            isDisabled={isLoaded}
            onSubmit={HandlerDataSize}
          />
          <Button
            text={'Маленький'}
            isActive={select}
            isDisabled={isLoaded}
            onSubmit={HandlerDataSize}
          />
        </div>
        <Loader isDisabled={isLoaded} />
      </nav>
    )
  }
)
