import React from 'react'
import { ISelectedRow } from '../../types'

const addressDefault = {
  streetAddress: '',
  city: '',
  state: '',
  zip: '',
}

export const SelectedRow: React.FC<ISelectedRow> = React.memo(
  ({ firstName, lastName, description = '', address = addressDefault }) => {
    return (
      <>
        {firstName && (
          <div className="info-container mtb1rem">
            <div className="info-container__item">
              Выбран пользователь:{' '}
              <strong>
                {firstName} {lastName}
              </strong>
            </div>
            <div className="info-container__item">
              Описание: <strong>{description}</strong>
            </div>
            <div className="info-container__item">
              Адрес проживания: <strong>{address.streetAddress}</strong>
            </div>
            <div className="info-container__item">
              Город: <strong>{address.city}</strong>
            </div>
            <div className="info-container__item">
              Провинция/штат: <strong>{address.state}</strong>
            </div>
            <div className="info-container__item">
              Индекс: <strong>{address.zip}</strong>
            </div>
          </div>
        )}
      </>
    )
  }
)
