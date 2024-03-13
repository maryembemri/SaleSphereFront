import {ProductsListToolbar} from './ProductsListToolbar'
import {ProductsListSearchComponent} from './ProductsListSearchComponent'
import {ProductsListGrouping} from './ProductsListGrouping'

const ProductsListHeader = () => {
  return (
    <div className='card-header d-flex flex-column border-0 p-4'>
      <label className='d-flex align-formItems-center form-label'>
        Sélectionner les produit pertinent.
      </label>
      <div className='d-flex'>
        <ProductsListSearchComponent />
        {/* begin::Card toolbar */}
        <div className='card-toolbar'>
          {/* begin::Group actions */}

          <ProductsListGrouping />
          <ProductsListToolbar />
          {/* end::Group actions */}
        </div>
        {/* end::Card toolbar */}
      </div>
    </div>
  )
}

export {ProductsListHeader}
