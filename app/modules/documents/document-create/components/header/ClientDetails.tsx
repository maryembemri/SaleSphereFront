import {FC} from 'react'
import {generateReference} from '../../../../../../_metronic/helpers'
import {Client} from '../../../../client'

type Props = {
  client: Client
}
const ClientDetails: FC<Props> = ({client}) => {
  return (
    <div>
      <div className='d-flex mb-3'>
        <span className='fw-semibold text-gray-600 me-2'>Code client:</span>
        <span className='fs-5'>{generateReference('CL', client.id)}</span>
      </div>
      <div className='d-flex mb-3'>
        <span className='fw-semibold text-gray-600 me-2'>Raison Sociale:</span>
        <span className='fs-5'>{client.name}</span>
      </div>
      {client.isExempt ? (
        <div className='d-flex mb-3'>
          <span className='fw-semibold text-gray-600 me-2'>Exenoration:</span>
          <span className='fs-5'>{client.exemptNumber}</span>
        </div>
      ) : (
        <div className='d-flex mb-3'>
          <span className='fw-semibold text-gray-600 me-2'>Matricule:</span>
          <span className='fs-5'>{client.taxNumber}</span>
        </div>
      )}
      <div className='d-flex mb-3'>
        <span className='fw-semibold text-gray-600 me-2'>Mobile:</span>
        <span className='fs-5'>{client.mobile || '--'}</span>
      </div>
      <div className='d-flex mb-3'>
        <span className='fw-semibold text-gray-600 me-2'>Telephone:</span>
        <span className='fs-5'>{client.phone || '--'}</span>
      </div>
      <div className='d-flex mb-3'>
        <span className='fw-semibold text-gray-600 me-2'>Adresse:</span>
        <span className='fs-5'>{client.address || '--'}</span>
      </div>
      <div className='d-flex mb-3'>
        <span className='fw-semibold text-gray-600 me-2'>Email:</span>
        <span className='fs-5'>{client.email || '--'}</span>
      </div>
    </div>
  )
}

export default ClientDetails
