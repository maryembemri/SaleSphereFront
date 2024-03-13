import {useEffect} from 'react'
import {MenuComponent} from '../../../../../../_metronic/assets/ts/components'
import {
  initialQueryState,
  Icon,
  getAllStatuses,
  filterStatus,
} from '../../../../../../_metronic/helpers'
import {useQueryRequest} from '../../core/QueryRequestProvider'
import {useQueryResponse} from '../../core/QueryResponseProvider'
import {useQuery} from 'react-query'
import {useDocumentFilter} from './DocumentFilterProvider'

const DocumentsListFilter = () => {
  const {year, setYear, month, setMonth, status, setStatus} = useDocumentFilter()
  const {updateState} = useQueryRequest()
  const {isLoading} = useQueryResponse()

  const {data: statuses, isLoading: statusesLoading} = useQuery('statuses', getAllStatuses)
  const documentStatus = filterStatus('document', statuses)

  useEffect(() => {
    MenuComponent.reinitialization()
  }, [])

  const resetData = () => {
    setMonth(undefined)
    setYear(new Date().getFullYear())
    setStatus(undefined)
    updateState({filter: undefined, ...initialQueryState})
  }

  const filterData = () => {
    updateState({
      filter: {status, year, month},
      ...initialQueryState,
    })
  }

  return (
    <>
      {/* begin::Filtre Button */}
      <button
        disabled={isLoading}
        type='button'
        className='btn btn-sm btn-light-primary me-3'
        data-menu-trigger='click'
        data-menu-placement='bottom-end'
      >
        <Icon iconName='filter' className='fs-2' />
        Filtre
      </button>
      {/* end::Filtre Button */}
      {/* begin::SubMenu */}
      <div
        className='menu menu-sub menu-sub-dropdown w-300px w-md-325px'
        style={{transform: 'translate3d(-46.4px, 342.4px, 0px)'}}
        data-menu='true'
      >
        {/* begin::Header */}
        <div className='px-7 py-3'>
          <div className='fs-5 text-dark fw-bolder'>Filtre Options</div>
        </div>
        {/* end::Header */}

        {/* begin::Separator */}
        <div className='separator border-gray-200'></div>
        {/* end::Separator */}

        {/* begin::Content */}
        <div className='px-7 py-5' data-document-table-filter='form'>
          {/* begin::Input group */}
          <div className='mb-5'>
            <label className='form-label'>Status</label>
            <select
              disabled={statusesLoading}
              className='form-select form-select-sm fw-bolder'
              data-select2='true'
              data-placeholder='Select option'
              data-allow-clear='true'
              data-document-table-filter='category'
              data-hide-search='true'
              onChange={(e) => setStatus(e.target.value)}
              value={status}
            >
              <option value=''>Tout</option>
              {documentStatus &&
                documentStatus.map((status) => (
                  <option key={status.id} value={status.id}>
                    {status.label}
                  </option>
                ))}
            </select>
          </div>
          {/* end::Input group */}

          {/* begin::Actions */}
          <div className='d-flex justify-content-end'>
            <button
              type='button'
              disabled={isLoading || statusesLoading}
              onClick={resetData}
              className='btn btn-sm btn-light btn-active-light-primary fw-bold me-2 px-6'
              data-menu-dismiss='true'
              data-document-table-filter='filter'
            >
              Reseter
            </button>
            <button
              disabled={isLoading || statusesLoading}
              type='button'
              onClick={filterData}
              className='btn btn-sm btn-primary fw-bold px-6'
              data-menu-dismiss='true'
              data-document-table-filter='reset'
            >
              Appliquer
            </button>
          </div>
          {/* end::Actions */}
        </div>
        {/* end::Content */}
      </div>
      {/* end::SubMenu */}
    </>
  )
}

export {DocumentsListFilter}
