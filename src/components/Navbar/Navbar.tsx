import React, {useState} from "react"
import {Button} from "../Button/Button"
import {useDispatch} from "react-redux"
import {selectDataAC} from "../../redux/reducers/select/action"

export const Navbar: React.FC = () => {
    const dispatch = useDispatch()
    const [btnActive, setBtnActive] = useState('')

    const style = {
        'm1rem': true,
        'mr0rem': true
    }

    const submitHandler = (text: string): void => {
        dispatch(selectDataAC(text))
        setBtnActive(text)
    }


    return (
        <nav className="navbar">
            <div className="navbar__title">Выберите набор данных:</div>
            <div className="navbar__container">
                <Button text={'Большой'} isActive={btnActive} onSubmit={submitHandler} style={style}/>
                <Button text={'Маленький'} isActive={btnActive} onSubmit={submitHandler} style={style}/>
            </div>
        </nav>
    )
}