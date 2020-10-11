import React from "react"
import loader from '../../assets/loader.svg'

export const Loader: React.FC = () => {
    return (
        <div className='loader'>
            <img src={loader} alt="#"/>
        </div>
    )
}