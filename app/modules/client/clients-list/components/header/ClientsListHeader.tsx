import {ClientsListToolbar} from './ClientsListToolbar'
import {ClientsListSearchComponent} from './ClientsListSearchComponent'

const ClientsListHeader = () => {
  return (
    <div className='card mb-6'>
      <div className='card-header d-flex border-0'>
        <ClientsListSearchComponent />
        {/* begin::Card toolbar */}
        <div className='card-toolbar'>
          {/* begin::Group actions */}
          <ClientsListToolbar />
          {/* end::Group actions */}
        </div>
        {/* end::Card toolbar */}
      </div>
    </div>
  )
}

export {ClientsListHeader}
