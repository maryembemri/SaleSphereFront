import {Link} from 'react-router-dom'
import {Icon} from '../../../../../../_metronic/helpers'
import {ProductsListFilter} from './ProductsListFilter'

const ProductsListToolbar = () => {
  return (
    <div className='d-flex justify-content-end' data-product-table-toolbar='base'>
      <ProductsListFilter />

      {/* begin::Add product */}
      <Link className='btn btn-sm btn-primary' to='/product/list/add'>
        <Icon iconName='plus' className='fs-2' />
        Ajouter
      </Link>

      {/* end::Add product */}
    </div>
  )
}

export {ProductsListToolbar}
