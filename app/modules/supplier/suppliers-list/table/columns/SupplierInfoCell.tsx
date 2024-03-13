import React, {FC} from 'react'
import {SVG, toAbsoluteUrl} from '../../../../../../_metronic/helpers'
import {Link} from 'react-router-dom'
import {Supplier} from '../../../core/models'
type Props = {
  supplier: Supplier
}
const SupplierInfoCell: FC<Props> = ({supplier}) => {
  return (
    <div className='text-start d-flex flex-row gap-2'>
      <div>
        <div>
          <SVG
            path={toAbsoluteUrl('/media/icons/duotune/ecommerce/ecm006.svg')}
            className='svg-icon svg-icon-4'
          />
        </div>
      </div>
      <div className='d-flex flex-column'>
        <Link
          className='text-gray-800 fw-bold fs-6 cursor-pointer'
          to={`/suppliers/list/show/${supplier.id}/informations`}
        >
          {supplier.name}
        </Link>
        <span className='w-150px text-truncate fw-semibold fs-7 text-gray-600'>
          {supplier.address}
        </span>
      </div>
    </div>
  )
}

export default SupplierInfoCell
