import React, {FC} from 'react'
import {Link} from 'react-router-dom'
import {SVG, toAbsoluteUrl} from '../../../../../../_metronic/helpers'
import {Client} from '../../../../client'
import {Supplier} from '../../../../supplier'
type Props = {
  client?: Client
  supplier?: Supplier
}

const DocumentClientCell: FC<Props> = ({client, supplier}) => {
  return (
    <div className='text-start d-flex flex-row gap-2'>
      <div>
        {/* <div>
        {client.type === 'individuel' ? (
          <SVG
            path={toAbsoluteUrl('/media/icons/duotune/communication/com013.svg')}
            className='svg-icon svg-icon-4'
          />
        ) : (
          <SVG
            path={toAbsoluteUrl('/media/icons/duotune/general/gen002.svg')}
            className='svg-icon svg-icon-4'
          />
        )}
      </div> */}
        <div>
          {client && (
            <SVG
              path={toAbsoluteUrl('/media/icons/duotune/communication/com013.svg')}
              className='svg-icon svg-icon-4 text-primary'
            />
          )}
          {supplier && (
            <SVG
              path={toAbsoluteUrl('/media/icons/duotune/ecommerce/ecm006.svg')}
              className='svg-icon svg-icon-4 text-primary'
            />
          )}
        </div>
      </div>
      <span className='d-flex flex-column'>
        {client && (
          <Link
            className='text-gray-800 fw-bold fs-6 cursor-pointer'
            to={`/client/list/show/${client.id}/informations`}
          >
            {client.name}
          </Link>
        )}

        {supplier && (
          <Link
            className='text-gray-800 fw-bold fs-6 cursor-pointer'
            to={`/suppliers/list/show/${supplier.id}/informations`}
          >
            {supplier.name}
          </Link>
        )}
      </span>
    </div>
  )
}

export default DocumentClientCell
