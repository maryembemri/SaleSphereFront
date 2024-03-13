import {FC} from 'react'
import {generateReference} from '../../../../../../_metronic/helpers'
import {Supplier} from '../../../../supplier'

type Props = {
  supplier: Supplier
}
const SupplierDetails: FC<Props> = ({supplier}) => {
  return (
    <div>
      <div className='d-flex mb-3'>
        <span className='fw-semibold text-gray-600 me-2'>Code fournisseur:</span>
        <span className='fs-5'>{generateReference('CL', supplier.id)}</span>
      </div>
      <div className='d-flex mb-3'>
        <span className='fw-semibold text-gray-600 me-2'>Raison Sociale:</span>
        <span className='fs-5'>{supplier.name}</span>
      </div>

      <div className='d-flex mb-3'>
        <span className='fw-semibold text-gray-600 me-2'>Matricule:</span>
        <span className='fs-5'>{supplier.taxNumber}</span>
      </div>

      <div className='d-flex mb-3'>
        <span className='fw-semibold text-gray-600 me-2'>Mobile:</span>
        <span className='fs-5'>{supplier.mobile || '--'}</span>
      </div>
      <div className='d-flex mb-3'>
        <span className='fw-semibold text-gray-600 me-2'>Telephone:</span>
        <span className='fs-5'>{supplier.phone || '--'}</span>
      </div>
      <div className='d-flex mb-3'>
        <span className='fw-semibold text-gray-600 me-2'>Adresse:</span>
        <span className='fs-5'>{supplier.address || '--'}</span>
      </div>
      <div className='d-flex mb-3'>
        <span className='fw-semibold text-gray-600 me-2'>Email:</span>
        <span className='fs-5'>{supplier.email || '--'}</span>
      </div>
    </div>
  )
}

export default SupplierDetails
