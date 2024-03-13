import React, {FC} from 'react'
import {Currency, SVG, toAbsoluteUrl} from '../../../../../../_metronic/helpers'

type Props = {
  id: number
  name: string
  address: string
  value: number
}

const StockCard: FC<Props> = ({id, name, address, value}) => {
  return (
    <div className='card d-none d-md-flex mb-4 bg-hover-light-secondary'>
      <div className='card-body d-flex justify-content-between '>
        <div className=''>
          <div>
            <SVG
              path={toAbsoluteUrl('/media/icons/duotune/general/gen001.svg')}
              className='svg-icon-4x'
            />
          </div>
          <div>
            <div className='fw-semibold text-gray-600'>Identifiant du stock: {id}</div>
            <div className='fs-4 fw-bold text-gray-800'>Nom: {name}</div>
            <div className='text-gray-600'>
              <SVG
                path={toAbsoluteUrl('/media/icons/duotune/maps/map008.svg')}
                className='svg-icon-1 text-primary'
              />
              {address}
            </div>
          </div>
        </div>
        <div className='d-flex flex-column justify-content-between'>
          <div>
            <div className='text-gray-600 fs-4 fw-bold'>Valeur de stock</div>
            <div className='d-flex gap-1 align-items-center'>
              <Currency
                className={`fw-semibold fs-1 ${value > 0 ? 'text-success' : 'text-danger'}`}
                value={value}
              />

              <sup className='fs-4 text-dark fw-bold'>TND</sup>
            </div>
          </div>
          <div className=''>
            <a className='btn btn-sm btn-primary me-3' href='/stock/available/41560'>
              Mouvement de stock
            </a>
            <button className='btn btn-sm btn-icon btn-light-primary'>
              <SVG
                path={toAbsoluteUrl('/media/icons/duotune/arrows/arr029.svg')}
                className='svg-icon-1'
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StockCard
