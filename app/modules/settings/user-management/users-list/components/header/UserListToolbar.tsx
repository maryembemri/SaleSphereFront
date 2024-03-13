import {Icon} from '../../../../../../../_metronic/helpers'
import {useListView} from '../../core/ListViewProvider'
import {UsersListFilter} from './UsersListFilter'

const UsersListToolbar = () => {
  const {setItemIdForUpdate} = useListView()
  const openAddUserModal = () => {
    setItemIdForUpdate(null)
  }

  return (
    <div className='d-flex justify-content-end' data-user-table-toolbar='base'>
      <UsersListFilter />

      {/* begin::Export */}
      <button type='button' className='btn btn-sm btn-light-primary me-3'>
        <Icon iconName='exit-up' className='fs-2' />
        Exporter
      </button>
      {/* end::Export */}

      {/* begin::Add user */}
      <button type='button' className='btn btn-sm btn-primary' onClick={openAddUserModal}>
        <Icon iconName='plus' className='fs-2' />
        Créer utilsateur
      </button>
      {/* end::Add user */}
    </div>
  )
}

export {UsersListToolbar}
