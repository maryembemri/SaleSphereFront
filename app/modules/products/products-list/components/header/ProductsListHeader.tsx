import {ProductsListToolbar} from './ProductsListToolbar'
import {ProductsListSearchComponent} from './ProductsListSearchComponent'

const ProductsListHeader = () => {
  return (
    <div className='card mb-6'>
      <div className='card-header d-flex border-0'>
        <ProductsListSearchComponent />
        {/* begin::Card toolbar */}
        <div className='card-toolbar'>
          {/* begin::Group actions */}
          <ProductsListToolbar />
          {/* end::Group actions */}
        </div>
        {/* end::Card toolbar */}
      </div>
    </div>
  )
}

export {ProductsListHeader}
