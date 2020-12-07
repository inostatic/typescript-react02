import React from 'react'
import loader from '../../assets/reload.svg'

interface propsType {
  isDisabled: boolean
}

export const Loader: React.FC<propsType> = React.memo(({ isDisabled }) => {
  return (
    <div className={`loader ${!isDisabled ? 'loader_none' : ''}`}>
      <img src={loader} alt="#" />
    </div>
  )
})
