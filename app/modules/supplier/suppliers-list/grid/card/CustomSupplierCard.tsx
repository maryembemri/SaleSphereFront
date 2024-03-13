import React, {FC} from 'react'
import {Link} from 'react-router-dom'
import {Currency, SVG, toAbsoluteUrl} from '../../../../../../_metronic/helpers'
import {Supplier} from '../../../core/models'

type Props = {
  supplier: Supplier
}

const CustomSupplierCard: FC<Props> = ({supplier}) => {
  const color = 'primary'
  return (
    <div className='col-md-6 col-xl-3'>
      <Link
        className='card border-hover-primary'
        to={`/suppliers/list/show/${supplier.id}/informations`}
      >
        <div className='text-start d-flex flex-row gap-4'>
          {/* begin:: Avatar */}
          <div className='symbol symbol-50px'>
            <div>
              <SVG
                path={toAbsoluteUrl('/media/icons/duotune/ecommerce/ecm006.svg')}
                className={`svg-icon-2 symbol-badge badge badge-circle bg-body start-100 top-18 svg-icon-gray-700 text-${color}`}
              />
            </div>
          </div>
          <div className='d-flex flex-column fs-6'>
            <span
              className='text-gray-800 text-hover-primary fw-semibold fs-4 text-truncate'
              style={{maxWidth: '200px'}}
            >
              {supplier.name}
            </span>
            <small>
              <span className='text-truncate' style={{maxWidth: '200px'}}>
                {supplier.email || '--'}
              </span>
            </small>
            <small>
              <span className='text-truncate' style={{maxWidth: '200px'}}>
                {supplier.phone || '--'}
              </span>
            </small>
          </div>
        </div>
        <div className={`badge badge-light-${color} fs-5 px-4 py-2`}>
          <Currency value={supplier.revenue} />
          <sup className='fs-9 text-muted fw-semibold ps-1'>TND</sup>
        </div>
      </Link>
    </div>
  )
}

export default CustomSupplierCard
