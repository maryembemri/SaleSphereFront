import {Link} from 'react-router-dom'
import {Icon} from '../../../../../../_metronic/helpers'
import {ProductsListFilter} from './ProductsListFilter'
import {exportToExcel} from '../../../core/requests'

const ProductsListToolbar = () => {
  return (
    <div className='d-flex justify-content-end' data-product-table-toolbar='base'>
      <ProductsListFilter />

      {/* begin::Export */}
      <button type='button' className='btn btn-sm btn-light-primary me-3' onClick={exportToExcel}>
        <Icon iconName='exit-up' className='fs-2' />
        Exporter
      </button>
      {/* end::Export */}

      {/* begin::Add product */}
      <Link className='btn btn-sm btn-primary' to='add'>
        <Icon iconName='plus' className='fs-2' />
        Ajouter
      </Link>

      {/* end::Add product */}
    </div>
  )
}

export {ProductsListToolbar}
