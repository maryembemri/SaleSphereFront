import {Link} from 'react-router-dom'
import {Icon} from '../../../../../../_metronic/helpers'
import {DocumentsListFilter} from './DocumentsListFilter'
import {useDocumentContext} from '../../../document-create/core/DocumentFormProvider'

const DocumentsListToolbar = () => {
  const {resetForm} = useDocumentContext()

  return (
    <div className='d-flex justify-content-end' data-document-table-toolbar='base'>
      <DocumentsListFilter />

      {/* begin::Export */}
      {/* <button disabled type='button' className='btn btn-sm btn-light-primary me-3'>
        <Icon iconName='exit-up' className='fs-2' />
        Export
      </button> */}
      {/* end::Export */}

      {/* begin::Add document */}
      <Link className='btn btn-sm btn-primary' onClick={resetForm} to='add'>
        <Icon iconName='plus' className='fs-2' />
        Ajouter
      </Link>

      {/* end::Add document */}
    </div>
  )
}

export {DocumentsListToolbar}
