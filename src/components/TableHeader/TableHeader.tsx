import React, { useEffect, useState} from 'react'
import {keyType, sortType} from '../../types'

interface TableHeaderProps {
  HandlerSort(key: sortType): void
  dataSize: string | null
}


export const TableHeader: React.FC<TableHeaderProps> = React.memo(({HandlerSort, dataSize}) => {
  const [down, up] = ['arrow_drop_down', 'arrow_drop_up']
  const [select, setSelect] = useState('')
  const initialHeaders = ['id', 'firstName', 'lastName', 'email', 'phone']
    .reduce((a, header) => (
      {
        ...a,
        [header]: {
          [up]: false,
          [down]: false
        }
      }), {})
  const [headers, setHeaders] = useState<any>(initialHeaders)

  useEffect(() => {
    if (dataSize) {
      setSelect('')
    }
  }, [dataSize])

  const HandlerArrows = (e: React.MouseEvent) => {
    const name = (e.target as HTMLButtonElement)
      .getAttribute('data-name') as keyType
    if (name) {
      const active = headers[name][up]
        ? {[up]: false, [down]: true}
        : {[up]: true, [down]: false}
      setSelect(name)
      setHeaders({
        ...initialHeaders,
        [name]: active
      })
      HandlerSort({key: name, flag: headers[name][up]})
    }
  }


  return (
    <div className="table-header" onClick={HandlerArrows}>
      {
        Object.keys(headers).map((name, i) =>
          <div
            key={i}
            className='table-header__item'
            data-name={name}>
            <span data-name={name}>{name}</span>
            <div
              data-name={name}
              className={`table-header__arrows ${name !== select ? 'opacity' : ''}`}>
                <span
                  data-name={name}
                  className={`material-icons ${headers[name][up] ? 'active' : ''} `}
                >{up}</span>
              <span
                data-name={name}
                className={`material-icons arrow ${headers[name][down] ? 'active' : ''} `}
              >{down}</span>
            </div>
          </div>
        )
      }
    </div>
  )
})
