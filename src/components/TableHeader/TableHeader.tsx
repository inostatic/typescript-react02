import React, {useState} from 'react'
import {keyType, sortType} from "../../types"


type TableHeaderProps = {
    sortByKey(key: sortType): void
}

interface IStateArrow {
    [index: string]: {
        el: string,
        flag: boolean
    }
}

export const TableHeader: React.FC<TableHeaderProps> = ({sortByKey}) => {
    const [before, after] = ['▼', '▲']
    const stateArrow = ['id', 'firstName', 'lastName', 'email', 'phone']
        .reduce((a, e) => ({...a, [e]: {el: before, flag: false}}), {})
    const [sortItem, setSortItem] = useState<IStateArrow>(stateArrow)

    const sortChangeArrow = (key: keyType): void => {
        const el = after
        const flag = !sortItem[key].flag
        sortItem[key].el === before
            ? setSortItem({...stateArrow, [key]: {el, flag}})
            : setSortItem({...stateArrow})
    }

    function sortBy(key: keyType) {
        return () => {
            sortChangeArrow(key)
            sortByKey({key, flag: sortItem[key].flag })
        }
    }

    return (
        <div className="table-header">
            <div onClick={sortBy('id')} className="table-header__item">id{sortItem.id.el}</div>
            <div onClick={sortBy('firstName')} className="table-header__item">firstName{sortItem.firstName.el}</div>
            <div onClick={sortBy('lastName')} className="table-header__item">lastName{sortItem.lastName.el}</div>
            <div onClick={sortBy('email')} className="table-header__item">email{sortItem.email.el}</div>
            <div onClick={sortBy('phone')} className="table-header__item">phone{sortItem.phone.el}</div>
        </div>
    )
}