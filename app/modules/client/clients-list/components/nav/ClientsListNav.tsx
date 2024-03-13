import React from 'react'
import {Icon} from '../../../../../../_metronic/helpers'
import {useListView} from '../../core/ListViewProvider'
import {useQueryRequest} from '../../core/QueryRequestProvider'

const ClientsListNav = () => {
  const {displayMode, setDisplayMode, setArchived} = useListView()
  const {updateState} = useQueryRequest()

  const handleDisplayChange = (view: 'list' | 'grid') => {
    setDisplayMode(view)
    localStorage.setItem('CLIENT-VIEW-KEY', view)
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
            id='active-tab'
            data-bs-toggle='tab'
            type='button'
            role='tab'
            aria-controls='home'
            aria-selected='true'
            onClick={() => handleArchivedChange(false)}
          >
            <Icon iconName={'archive'} className='text-primary me-2' />
            Clients
          </button>
        </li>
        <li className='nav-item' role='presentation'>
          <button
            className='nav-link link-danger'
            id='archived-tab'
            data-bs-toggle='tab'
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

export default ClientsListNav
