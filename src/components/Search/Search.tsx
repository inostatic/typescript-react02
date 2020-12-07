import React, { useCallback, useState } from 'react'
import { Button } from '../Button/Button'

interface SearchProps {
  searchByString(str: string): void
}

export const Search: React.FC<SearchProps> = React.memo(
  ({ searchByString }) => {
    const [searchString, setSearchString] = useState('')

    const sendSearchString = useCallback(() => {
      searchByString(searchString)
    }, [searchString, searchByString])

    return (
      <div className="search-form">
        <input
          type="text"
          placeholder="Введите строку для поиска"
          onChange={(e) => setSearchString(e.target.value)}
          value={searchString}
        />
        <Button
          text={'Найти'}
          onSubmit={sendSearchString}
          style={{ 'br-search': true }}
        />
      </div>
    )
  }
)
