import React from 'react'
import classNames from 'classnames'

interface ButtonProps {
  text: string
  isActive?: string | null
  isDisabled?: boolean
  onSubmit: (text: string) => void
  style?: {
    [index: string]: boolean
  }
}

export const Button: React.FC<ButtonProps> = React.memo(
  ({ text, isActive, isDisabled, onSubmit, style = {} }) => {
    const btnClass = classNames({
      button: true,
      button_active: isActive === text,
      button_disabled: isDisabled,
      ...style,
    })

    return (
      <button className={btnClass} disabled={isDisabled} onClick={() => onSubmit(text)}>
        {text}
      </button>
    )
  }
)
