import {Link} from 'react-router-dom'
import {Icon} from '../../../../../../_metronic/helpers'
import {SuppliersListFilter} from './SuppliersListFilter'
import {exportToExcel} from '../../../core/requests'

const SuppliersListToolbar = () => {
  return (
    <div className='d-flex justify-content-end' data-supplier-table-toolbar='base'>
      <SuppliersListFilter />

      {/* begin::Export */}
      <button type='button' className='btn btn-sm btn-light-primary me-3' onClick={exportToExcel}>
        <Icon iconName='exit-up' className='fs-2' />
        Exporter
      </button>
      {/* end::Export */}

      {/* begin::Add supplier */}
      <Link className='btn btn-sm btn-primary' to='add'>
        <Icon iconName='plus' className='fs-2' />
        Ajouter
      </Link>

      {/* end::Add supplier */}
    </div>
  )
}

export {SuppliersListToolbar}
