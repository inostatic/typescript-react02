import React from "react"
import classNames from "classnames"

interface ButtonListProps {
    text: string
    isActive?: string
    isDisabled? :boolean
    onSubmit: (text: string) => void
    style?: {
        [index: string]: boolean
    }
}

export const Button: React.FC<ButtonListProps> = ({text, isActive, isDisabled, onSubmit, style = {}}) => {


    const btnClass = classNames({
        'button': true,
        'button_active': isActive === text,
        'button_disabled': isDisabled,
        ...style

    })

    return (
        <button
            className={btnClass}
            onClick={() => onSubmit(text)}
        >{text}
        </button>
    )
}