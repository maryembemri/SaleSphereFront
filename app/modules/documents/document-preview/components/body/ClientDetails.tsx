import {FC} from 'react'

import {generateReference} from '../../../../../../_metronic/helpers'
import {Client} from '../../../../client'

const ClientDetails: FC<{client?: Client}> = ({client}) => {
  return (
    <section className='w-100 mx-10'>
      <h2 className='fw-bold fs-1 pb-3 mb-5 border-bottom border-3 border-primary'>
        Détails Client
      </h2>

      {client && (
        <div className='mb-10'>
          <div className='d-flex mb-3 fs-4'>
            <span className='fw-semibold text-gray-600 me-2'>Code client:</span>
            <span className='fs-3'>{generateReference('CL', client.id)}</span>
          </div>
          <div className='d-flex mb-3 fs-4'>
            <span className='fw-semibold text-gray-600 me-2'>Raison Sociale:</span>
            <span className='fs-3'>{client.name}</span>
          </div>
          {client.isExempt ? (
            <div className='d-flex mb-3 fs-4'>
              <span className='fw-semibold text-gray-600 me-2'>Exenoration:</span>
              <span className='fs-3'>{client.exemptNumber}</span>
            </div>
          ) : (
            <div className='d-flex mb-3 fs-4'>
              <span className='fw-semibold text-gray-600 me-2'>Matricule:</span>
              <span className='fs-3'>{client.taxNumber}</span>
            </div>
          )}

          <div className='d-flex mb-3 fs-4'>
            <span className='fw-semibold text-gray-600 me-2'>Telephone:</span>
            <span className='fs-3'>{client.phone || '--'}</span>
          </div>
          {client.mobile && (
            <div className='d-flex mb-3 fs-4'>
              <span className='fw-semibold text-gray-600 me-2'>Mobile:</span>
              <span className='fs-3'>{client.mobile || '--'}</span>
            </div>
          )}
          {client.email && (
            <div className='d-flex mb-3 fs-4'>
              <span className='fw-semibold text-gray-600 me-2'>Email:</span>
              <span className='fs-3'>{client.email || '--'}</span>
            </div>
          )}
          <div className='d-flex mb-3 fs-4'>
            <span className='fw-semibold text-gray-600 me-2'>Adresse:</span>
            <span className='fs-3'>{client.address || '--'}</span>
          </div>
        </div>
      )}
    </section>
  )
}

export default ClientDetails
