import {Icon} from '../../../../../../_metronic/helpers'
import {useListView} from '../../core/ListViewProvider'
import {useQueryRequest} from '../../core/QueryRequestProvider'

const ProductsListNav = () => {
  const {displayMode, setDisplayMode, setArchived} = useListView()
  const {updateState} = useQueryRequest()

  const handleDisplayChange = (view: 'list' | 'grid') => {
    setDisplayMode(view)
    localStorage.setItem('PRODUCT-VIEW-KEY', view)
    updateState({page: 1, items_per_page: view === 'list' ? 10 : 20})
  }
  const handleArchivedChange = (isArchived: boolean) => {
    setArchived(isArchived)
    updateState({
      page: 1,
      items_per_page: displayMode === 'list' ? 10 : 20,
      archived: isArchived,
    })
  }
  return (
    <div className='d-flex justify-content-between align-items-end'>
      <ul className='nav nav-tabs' id='myTab' role='tablist'>
        <li className='nav-item' role='presentation'>
          <button
            className='nav-link link-primary active'
            id='home-tab'
            data-bs-toggle='tab'
            data-bs-target='#home'
            type='button'
            role='tab'
            aria-controls='home'
            aria-selected='true'
            onClick={() => handleArchivedChange(false)}
          >
            <Icon iconName={'archive'} className='text-primary me-2' />
            Product
          </button>
        </li>
        <li className='nav-item' role='presentation'>
          <button
            className='nav-link link-danger'
            id='profile-tab'
            data-bs-toggle='tab'
            data-bs-target='#profile'
            type='button'
            role='tab'
            aria-controls='profile'
            aria-selected='false'
            onClick={() => handleArchivedChange(true)}
          >
            <Icon iconName={'archive'} className='text-danger me-2' />
            Archivée
          </button>
        </li>
      </ul>
      <ul className='nav nav-tabs' id='myTab' role='tablist'>
        <li className='nav-item' role='presentation'>
          <button
            className={`nav-link link-primary ${displayMode === 'grid' && 'active'}`}
            id='home-tab'
            data-bs-toggle='tab'
            data-bs-target='#home'
            type='button'
            role='tab'
            aria-controls='home'
            aria-selected='true'
            onClick={() => handleDisplayChange('grid')}
          >
            <Icon iconName={'element-11'} className='text-primary fs-3' />
          </button>
        </li>
        <li className='nav-item' role='presentation'>
          <button
            className={`nav-link link-primary ${displayMode === 'list' && 'active'}`}
            id='profile-tab'
            data-bs-toggle='tab'
            data-bs-target='#profile'
            type='button'
            role='tab'
            aria-controls='profile'
            aria-selected='false'
            onClick={() => handleDisplayChange('list')}
          >
            <Icon iconName={'row-horizontal'} className='text-primary fs-3' />
          </button>
        </li>
      </ul>
    </div>
  )
}

export default ProductsListNav
