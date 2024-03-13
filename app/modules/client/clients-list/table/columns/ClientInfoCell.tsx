import React, {FC} from 'react'
import {SVG, toAbsoluteUrl} from '../../../../../../_metronic/helpers'
import {Link} from 'react-router-dom'
import {Client} from '../../../core/_models'
type Props = {
  client: Client
}
const ClientInfoCell: FC<Props> = ({client}) => {
  return (
    <div className='text-start d-flex flex-row gap-2 link-primary'>
      <div>
        {client.type === 'individual' ? (
          <SVG
            path={toAbsoluteUrl('/media/icons/duotune/communication/com013.svg')}
            className='svg-icon svg-icon-3'
          />
        ) : (
          <SVG
            path={toAbsoluteUrl('/media/icons/duotune/general/gen002.svg')}
            className='svg-icon svg-icon-3'
          />
        )}
      </div>

      <div className='d-flex flex-column'>
        <Link
          to={`/client/list/show/${client.id}/informations`}
          className='text-gray-800 fw-bold fs-6 cursor-pointer link-primary'
        >
          {client.name || '--'}
        </Link>
        <span className='w-150px text-truncate fw-semibold fs-7 text-gray-600'>
          {client.taxNumber || client.exemptNumber || '--'}
        </span>
      </div>
    </div>
  )
}

export default ClientInfoCell
