import {Link} from 'react-router-dom'
import {Icon} from '../../../../../../_metronic/helpers'
import {ClientsListFilter} from './ClientsListFilter'
import {exportToExcel} from '../../../core/_requests'

const ClientsListToolbar = () => {
  return (
    <div className='d-flex justify-content-end' data-client-table-toolbar='base'>
      <ClientsListFilter />

      {/* begin::Export */}
      <button type='button' className='btn btn-sm btn-light-primary me-3' onClick={exportToExcel}>
        <Icon iconName='exit-up' className='fs-2' />
        Exporter
      </button>
      {/* end::Export */}

      {/* begin::Add client */}
      <Link className='btn btn-sm btn-primary' to='add'>
        <Icon iconName='plus' className='fs-2' />
        Ajouter
      </Link>

      {/* end::Add client */}
    </div>
  )
}

export {ClientsListToolbar}
