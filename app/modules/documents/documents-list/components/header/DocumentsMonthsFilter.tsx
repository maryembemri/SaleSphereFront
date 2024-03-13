import {FC} from 'react'

import {useDocumentFilter} from './DocumentFilterProvider'
import {useQueryRequest} from '../../core/QueryRequestProvider'
import {initialQueryState} from '../../core/_init'

const currentYear: number = new Date().getFullYear()

const DocumentsMonthsFilter: FC = () => {
  const {year, setYear, month, setMonth, status} = useDocumentFilter()
  const {updateState} = useQueryRequest()

  let years: number[] = []

  for (let index = 2020; index <= currentYear; index++) {
    years.push(index)
  }

  const handleYearClick = (year: number) => {
    setYear(year)
    updateState({
      filter: {status, month, year},
      ...initialQueryState,
    })
  }
  const handleMonthClick = (month: number) => {
    setMonth(month)
    updateState({
      filter: {status, month, year},
      ...initialQueryState,
    })
  }
  const monthNames = [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre',
  ]

  return (
    <div className='w-100 d-flex'>
      <div className='col-12 col-sm-1'>
        <div className='form-label'>Anneé:</div>
        <button
          disabled={month === undefined}
          type='button'
          className='btn btn-sm btn-light-primary'
          data-menu-trigger='click'
          data-menu-placement='bottom-start'
        >
          {year}
        </button>

        <div className='menu menu-sub menu-sub-dropdown px-4 py-2' data-menu='true'>
          <ul className='nav nav-pills d-flex flex-column'>
            {years.map((y, index) => (
              <li key={index}>
                <button
                  data-menu-dismiss='true'
                  onClick={() => handleYearClick(y)}
                  className={`nav-link bg-active-light text-active-primary text-dark w-100  ${
                    y === year ? 'active' : 'bg-hover-light'
                  }`}
                >
                  {String(y)}
                </button>
              </li>
            ))}
          </ul>
        </div>
        {/* end::SubMenu */}
      </div>
      <ul className='col-12 col-sm-11 row nav nav-pills'>
        {monthNames.map((m, index) => (
          <li className='col-2' key={index}>
            <button
              className={`nav-link bg-active-light text-active-primary text-dark  w-100 ${
                index === month ? 'active' : ''
              }`}
              id={`pills-${m.toLowerCase()}-tab`}
              data-bs-toggle='pill'
              data-bs-target={`#pills-${m.toLowerCase()}`}
              type='button'
              role='tab'
              aria-controls={`pills-${m.toLowerCase()}`}
              aria-selected={index === 0 ? 'true' : 'false'}
              onClick={() => handleMonthClick(index)}
            >
              {m}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DocumentsMonthsFilter
