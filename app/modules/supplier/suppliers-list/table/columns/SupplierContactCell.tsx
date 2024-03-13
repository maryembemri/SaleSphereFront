import React, {FC} from 'react'
import {Supplier} from '../../../core/models'

type Props = {
  supplier: Supplier
}
const SupplierContactCell: FC<Props> = ({supplier}) => {
  return (
    <div className='text-start'>
      <span className='d-flex flex-column'>
        <div className='text-gray-800 fw-bold fs-6'>
          {supplier.phone || supplier.mobile || '--'}
        </div>
        <span className='w-150px text-truncate fw-semibold fs-7 text-gray-600'>
          {supplier.email || '--'}
        </span>
      </span>
    </div>
  )
}

export default SupplierContactCell
