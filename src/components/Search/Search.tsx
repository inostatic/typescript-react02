import React, {useState} from "react"
import {Button} from "../Button/Button";

interface SearchProps {
    searchByString(str: string): void
}

export const Search: React.FC<SearchProps> = ({searchByString}) => {
    const [searchString, setSearchString] = useState('')

    function sendSearchString() {
        return (): void => {
            searchByString(searchString)
        }
    }


    return (
        <div className="search-form">
            <input type="text"
                   placeholder="Введите строку для поиска"
                   onChange={(e) => setSearchString(e.target.value)}
            />
            <Button text={'Найти'} onSubmit={sendSearchString()} style={{'br5px': true}} />
        </div>
    )
}