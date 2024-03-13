import {SuppliersListToolbar} from './SuppliersListToolbar'
import {SuppliersListSearchComponent} from './SuppliersListSearchComponent'

const SuppliersListHeader = () => {
  return (
    <div className='card mb-6'>
      <div className='card-header d-flex border-0'>
        <SuppliersListSearchComponent />
        {/* begin::Card toolbar */}
        <div className='card-toolbar'>
          {/* begin::Group actions */}
          <SuppliersListToolbar />
          {/* end::Group actions */}
        </div>
        {/* end::Card toolbar */}
      </div>
    </div>
  )
}

export {SuppliersListHeader}
