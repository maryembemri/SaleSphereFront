import React, {FC} from 'react'
import {Client} from '../../../core/_models'

type Props = {
  client: Client
}
const ClientContactCell: FC<Props> = ({client}) => {
  return (
    <div className='text-start'>
      <span className='d-flex flex-column'>
        <div className='text-gray-800 fw-bold fs-6'>{client.phone || client.mobile || '--'}</div>
        <span className='w-150px text-truncate fw-semibold fs-7 text-gray-600'>
          {client.email || '--'}
        </span>
      </span>
    </div>
  )
}

export default ClientContactCell
