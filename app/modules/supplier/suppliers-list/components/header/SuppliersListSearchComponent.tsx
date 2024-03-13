/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react'
import {Icon, useDebounce} from '../../../../../../_metronic/helpers'
import {useQueryRequest} from '../../core/QueryRequestProvider'
import {useListView} from '../../core/ListViewProvider'

const SuppliersListSearchComponent = () => {
  const {updateState} = useQueryRequest()
  const {displayMode} = useListView()
  const [searchTerm, setSearchTerm] = useState<string>('')
  const initialQueryState = {page: 1, items_per_page: displayMode === 'list' ? 10 : 20}
  // Debounce search term so that it only gives us latest value ...
  // ... if searchTerm has not been updated within last 500ms.
  // The goal is to only have the API call fire when supplier stops typing ...
  // ... so that we aren't hitting our API rapidly.
  const debouncedSearchTerm = useDebounce(searchTerm, 300)
  // Effect for API call
  useEffect(
    () => {
      if (debouncedSearchTerm !== undefined && searchTerm !== undefined) {
        updateState({search: debouncedSearchTerm, ...initialQueryState})
      }
    },
    [debouncedSearchTerm] // Only call effect if debounced search term changes
    // More details about useDebounce: https://usehooks.com/useDebounce/
  )

  return (
    <div className='card-title flex-grow-1'>
      {/* begin::Search */}
      <div className='d-flex align-items-center w-100  my-1'>
        <Icon iconName='magnifier' className='fs-2 position-absolute ms-4' />
        <input
          type='text'
          data-supplier-table-filter='search'
          className='form-control form-control-sm form-control-solid ps-12'
          placeholder='Recherche par mot clé'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {/* end::Search */}
    </div>
  )
}

export {SuppliersListSearchComponent}
