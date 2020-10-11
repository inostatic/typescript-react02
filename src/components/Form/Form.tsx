import React, {useEffect, useState} from "react"
import {Button} from "../Button/Button"
import {ITableItem} from "../../types"


interface FormProps {
    sendForm(form: ITableItem): void
}


export const Form: React.FC<FormProps> = ({sendForm}) => {
    const [openCloseForm, setOpenCLoseForm] = useState(false)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [id, setId] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const inputs = [
        {name: 'id', type: 'number', value: id, handler: setId},
        {name: 'firstName', type: 'text', value: firstName, handler: setFirstName},
        {name: 'lastName', type: 'text', value: lastName, handler: setLastName},
        {name: 'email', type: 'email', value: email, handler: setEmail},
        {name: 'phone', type: 'text',value: phone, handler: setPhone}
    ]

    const toggleHandler = (): void => {
        setOpenCLoseForm(!openCloseForm)
    }

    useEffect(() => {
        if (id && firstName && lastName && email && phone) {
            setBtnDisabled(false)
        } else if (!id || !firstName || !lastName || !email || !phone) {
            setBtnDisabled(true)
        }
    }, [id, firstName, lastName, email, phone])

    const onSubmit = (): void => {
        if (!btnDisabled) {
            sendForm({
                id: +id,
                firstName, lastName, email, phone
            })
            inputs.forEach(e => e.handler(''))
        }
    }


    return (
        <div className="form-add">
            {!openCloseForm && <Button text={'Открыть форму'} onSubmit={toggleHandler} style={{'mtb1rem': true}}/>}

            {
                openCloseForm &&
                <>
                    <Button text={'Закрыть форму'} onSubmit={toggleHandler} style={{'mtb1rem': true}}/>
                    <div className="form-add__container">
                        {
                            inputs
                                .map(({name, type, value, handler}, key) =>
                                    <div className="form-add__input" key={key}>
                                        <label htmlFor={name}>{name}</label>
                                        <input
                                            name={name}
                                            type={type}
                                            placeholder={name}
                                            value={value}
                                            onChange={(e) => handler(e.target.value)}/>
                                    </div>
                                )
                        }
                    </div>
                    <div className="form-add__btn">
                        <Button onSubmit={onSubmit} text={'Добавить'} isDisabled={btnDisabled} style={{'mtb1rem': true}}/>
                    </div>
                </>
            }
        </div>
    )
}


