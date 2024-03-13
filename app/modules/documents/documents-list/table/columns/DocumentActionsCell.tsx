/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {Icon, SVG, Success, toAbsoluteUrl} from '../../../../../../_metronic/helpers'
import Swal from 'sweetalert2'
import {updateDocumentStatus} from '../../../core/requests'
import {useQueryResponse} from '../../core/QueryResponseProvider'
import {MenuComponent} from '../../../../../../_metronic/assets/ts/components'
import {useDocumentContext} from '../../../document-create/core/DocumentFormProvider'
import {Document} from '../../../core/models'
type Props = {
  document: Document
}

const DocumentActionsCell: FC<Props> = ({document}) => {
  const navigate = useNavigate()
  const {refetch} = useQueryResponse()
  const {setItemIdForTransform, formData, setFormData} = useDocumentContext()

  useEffect(() => {
    MenuComponent.reinitialization()
  }, [])

  const handleValidation = () => {
    Swal.fire({
      title: 'Êtes-vous sûr ?',
      text: 'Veuillez vous validé ce document.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui',
      cancelButtonText: 'Non',
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    }).then(async (result) => {
      if (result.isConfirmed) {
        await updateDocumentStatus(document.id, 'VAL_DOC')

        Success.fire({
          title: 'Document mis à jour!',
          text: 'Document mis à jour avec succès',
        }).then(() => {
          refetch()
        })
      }
    })
  }
  const handleCancel = () => {
    Swal.fire({
      title: 'Êtes-vous sûr ?',
      text: 'Veuillez vous annuler ce document.',
      icon: 'error',
      showCancelButton: true,
      confirmButtonText: 'Oui',
      cancelButtonText: 'Non',
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    }).then(async (result) => {
      if (result.isConfirmed) {
        await updateDocumentStatus(document.id, 'CAN_DOC')

        Success.fire({
          title: 'Document mis à jour!',
          text: 'Document mis à jour avec succès',
        }).then(() => {
          refetch()
        })
      }
    })
  }

  const handleTransformation = () => {
    setItemIdForTransform(document.id)
    if (document.code === 'DV') {
      setFormData({...formData, code: 'CV'})
      navigate('/sale/order/add')
    }

    if (document.code === 'CV') {
      setFormData({...formData, code: 'BL'})
      navigate('/sale/delivery-note/add')
    }
    if (document.code === 'BL') {
      setFormData({...formData, code: 'FV'})
      navigate('/sale/invoice/add')
    }

    setItemIdForTransform(document.id)
    if (document.code === 'CA') {
      setFormData({...formData, code: 'BR'})
      navigate('/purchase/supplier-deliverynote/add')
    }

    if (document.code === 'BR') {
      setFormData({...formData, code: 'FA'})
      navigate('/purchase/supplier-invoice/add')
    }
  }

  return (
    <div>
      <button
        disabled
        className='btn btn-icon btn-custom btn-icon-secondary btn-active-light btn-active-color-primary w-35px h-35px'
      >
        <Icon iconName='pencil' className='fs-1 me-1' />
      </button>
      <Link
        to={'../document/preview/' + document.id}
        className='btn btn-icon btn-custom btn-icon-secondary btn-active-light btn-active-color-primary w-35px h-35px'
      >
        <Icon iconName='eye' className='fs-1 me-1' />
      </Link>
      <button
        data-menu-trigger='click'
        data-menu-placement='bottom-end'
        className='btn btn-icon btn-custom btn-icon-muted btn-active-light-danger btn-active-color-primary w-35px h-35px'
      >
        <Icon iconName='dots-square-vertical' className='fs-1 me-1' />
      </button>
      {/* begin::Menu */}
      <div
        className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4'
        data-menu='true'
      >
        {/* begin::Menu item */}
        {!(document.code === 'FV' || document.code === 'FA') && (
          <div className='menu-item px-3'>
            <button
              disabled={document.status.code === 'CAN_DOC'}
              className='menu-link px-3 bg-transparent bg-hover-light-primary border-0 w-100'
              onClick={handleTransformation}
            >
              <SVG
                path={toAbsoluteUrl('/media/icons/duotune/arrows/arr031.svg')}
                className='svg-icon-2 me-2 text-primary'
              />
              Transfer
            </button>
          </div>
        )}
        {/* end::Menu item */}
        {/* begin::Menu item */}
        <div className='menu-item px-3'>
          <button
            disabled={document.status.code === 'VAL_DOC' || document.status.code === 'CAN_DOC'}
            className='menu-link px-3 bg-transparent bg-hover-light-primary border-0 w-100'
            onClick={handleValidation}
          >
            <SVG
              path={toAbsoluteUrl('/media/icons/duotune/files/fil008.svg')}
              className='svg-icon-2 me-2 text-success'
            />
            Valider
          </button>
        </div>
        {/* end::Menu item */}
        {/* begin::Menu item */}
        <div className='menu-item px-3'>
          <button
            disabled={document.status.code === 'CAN_DOC'}
            className='menu-link px-3 bg-transparent bg-hover-light-primary border-0 w-100'
            onClick={handleCancel}
          >
            <SVG
              path={toAbsoluteUrl('/media/icons/duotune/files/fil007.svg')}
              className='svg-icon-2 me-2 text-danger'
            />
            Annuler
          </button>
        </div>
        {/* end::Menu item */}
      </div>
    </div>
  )
}

export {DocumentActionsCell}
