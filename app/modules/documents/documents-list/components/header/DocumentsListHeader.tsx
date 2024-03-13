import {DocumentFilterProvider} from './DocumentFilterProvider'
import {DocumentsListSearchComponent} from './DocumentsListSearchComponent'
import {DocumentsListToolbar} from './DocumentsListToolbar'
import DocumentsMonthsFilter from './DocumentsMonthsFilter'

const DocumentsListHeader = () => {
  return (
    <div className='card mb-6'>
      <DocumentFilterProvider>
        <div className='card-header d-flex border-0'>
          <DocumentsListSearchComponent />
          {/* begin::Card toolbar */}
          <div className='card-toolbar'>
            {/* begin::Group actions */}
            <DocumentsListToolbar />
            {/* end::Group actions */}
          </div>
          {/* end::Card toolbar */}
        </div>
        <div className='card-footer py-4 d-flex '>
          <DocumentsMonthsFilter />
        </div>
      </DocumentFilterProvider>
    </div>
  )
}

export {DocumentsListHeader}
