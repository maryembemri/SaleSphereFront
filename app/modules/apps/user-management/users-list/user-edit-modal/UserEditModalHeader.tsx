import {Icon} from '../../../../../../_metronic/helpers'
import {useListView} from '../core/ListViewProvider'

const UserEditModalHeader = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = useListView()

  return (
    <div className='modal-header'>
      {/* begin::Modal title */}
      {itemIdForUpdate ? (
        <h2 className='fw-bolder'>Modifier utilisateur</h2>
      ) : (
        <h2 className='fw-bolder'>Ajouter utilisateur</h2>
      )}
      {/* end::Modal title */}

      {/* begin::Close */}
      <div
        className='btn btn-icon btn-sm btn-active-icon-primary'
        data-users-modal-action='close'
        onClick={() => setItemIdForUpdate(undefined)}
        style={{cursor: 'pointer'}}
      >
        <Icon iconName='cross' className='fs-1' />
      </div>
      {/* end::Close */}
    </div>
  )
}

export {UserEditModalHeader}
