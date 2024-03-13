import {FC} from 'react'
import {generateReference} from '../../../../../../_metronic/helpers'
import {Supplier} from '../../../../supplier'

const SupplierDetails: FC<{supplier?: Supplier}> = ({supplier}) => {
  return (
    <section className='w-100 mx-10'>
      <h2 className='fw-bold fs-1 pb-3 mb-5 border-bottom border-3 border-primary'>
        Détails Fournisseur
      </h2>

      {supplier && (
        <div className='mb-10'>
          <div className='d-flex mb-3 fs-4'>
            <span className='fw-semibold text-gray-600 me-2'>Code supplier:</span>
            <span className='fs-3'>{generateReference('CL', supplier.id)}</span>
          </div>
          <div className='d-flex mb-3 fs-4'>
            <span className='fw-semibold text-gray-600 me-2'>Raison Sociale:</span>
            <span className='fs-3'>{supplier.name}</span>
          </div>

          <div className='d-flex mb-3 fs-4'>
            <span className='fw-semibold text-gray-600 me-2'>Matricule:</span>
            <span className='fs-3'>{supplier.taxNumber}</span>
          </div>

          <div className='d-flex mb-3 fs-4'>
            <span className='fw-semibold text-gray-600 me-2'>Telephone:</span>
            <span className='fs-3'>{supplier.phone || '--'}</span>
          </div>
          {supplier.mobile && (
            <div className='d-flex mb-3 fs-4'>
              <span className='fw-semibold text-gray-600 me-2'>Mobile:</span>
              <span className='fs-3'>{supplier.mobile || '--'}</span>
            </div>
          )}
          {supplier.email && (
            <div className='d-flex mb-3 fs-4'>
              <span className='fw-semibold text-gray-600 me-2'>Email:</span>
              <span className='fs-3'>{supplier.email || '--'}</span>
            </div>
          )}
          <div className='d-flex mb-3 fs-4'>
            <span className='fw-semibold text-gray-600 me-2'>Adresse:</span>
            <span className='fs-3'>{supplier.address || '--'}</span>
          </div>
        </div>
      )}
    </section>
  )
}

export default SupplierDetails
