import {FC} from 'react'
import DocumentHeader from './components/header/DocumentHeader'
import DocumentFooter from './components/footer/DocumentFooter'
import DocumentBody from './components/body/DocumentBody'
import {SVG, Success, toAbsoluteUrl} from '../../../../_metronic/helpers'
import {useDocumentResponseData, useDocumentResponseLoading} from './core/DocumentResponseProvider'
import {Resolution, usePDF} from 'react-to-pdf'
import {updateDocumentStatus} from '../core/requests'
import Swal from 'sweetalert2'
import {useNavigate} from 'react-router-dom'

const DocumentPrivew: FC = () => {
  const data = useDocumentResponseData()
  const isLoading = useDocumentResponseLoading()
  const navigate = useNavigate()

  const {toPDF, targetRef} = usePDF({
    filename: data?.document.reference + '.pdf',
    resolution: Resolution.MEDIUM,
  })

  const handleValid = () => {
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
        const response = await updateDocumentStatus(data?.document.id, 'VAL_DOC')

        Success.fire({
          title: 'Document mis à jour!',
          text: 'Document mis à jour avec succès',
        }).then(() => {
          navigate(-1)
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
        const response = await updateDocumentStatus(data?.document.id, 'CAN_DOC')

        Success.fire({
          title: 'Document mis à jour!',
          text: 'Document mis à jour avec succès',
        }).then(() => {
          navigate(-1)
        })
      }
    })
  }

  if (isLoading) return <div>Loading</div>

  if (data) {
    return (
      <div className='card'>
        <div className='engage-toolbar d-flex flex-column position-fixed px-5 fw-bolder zindex-2 top-50 end-0 gap-2 '>
          {/* <ToggleHelpDrawer /> */}
          <button
            id='print_toggle'
            className='engage-print-toggle btn btn-flex h-35px bg-body btn-color-gray-700 btn-active-color-gray-900 shadow-sm px-5 rounded-top-0'
            title=''
            data-bs-toggle='tooltip'
            data-bs-placement='left'
            data-bs-dismiss='click'
            data-bs-trigger='hover'
            onClick={() => toPDF()}
          >
            <SVG path={toAbsoluteUrl('/media/svg/files/pdf.svg')} className='svg-icon-1 me-2' />
            Imprimer
          </button>
          {data.document.status.code === 'NEW_DOC' && (
            <button
              id='print_toggle'
              className='engage-print-toggle btn btn-flex h-35px bg-body btn-color-gray-700 btn-active-color-gray-900 shadow-sm px-5 rounded-top-0'
              title=''
              data-bs-toggle='tooltip'
              data-bs-placement='left'
              data-bs-dismiss='click'
              data-bs-trigger='hover'
              onClick={handleValid}
            >
              <SVG
                path={toAbsoluteUrl('/media/icons/duotune/files/fil008.svg')}
                className='svg-icon-1 me-2 text-success'
              />
              Valider
            </button>
          )}
          {(data.document.status.code === 'NEW_DOC' || data.document.status.code === 'VAL_DOC') && (
            <button
              id='print_toggle'
              className='engage-print-toggle btn btn-flex h-35px bg-body btn-color-gray-700 btn-active-color-gray-900 shadow-sm px-5 rounded-top-0'
              title=''
              data-bs-toggle='tooltip'
              data-bs-placement='left'
              data-bs-dismiss='click'
              data-bs-trigger='hover'
              onClick={handleCancel}
            >
              <SVG
                path={toAbsoluteUrl('/media/icons/duotune/files/fil007.svg')}
                className='svg-icon-1 me-2 text-danger'
              />
              Annuler
            </button>
          )}
          <button
            id='print_toggle'
            className='engage-print-toggle btn btn-flex h-35px bg-body btn-color-gray-700 btn-active-color-gray-900 shadow-sm px-5 rounded-top-0'
            title=''
            data-bs-toggle='tooltip'
            data-bs-placement='left'
            data-bs-dismiss='click'
            data-bs-trigger='hover'
            onClick={() => {
              navigate(-1)
            }}
          >
            <SVG
              path={toAbsoluteUrl('/media/icons/duotune/arrows/arr092.svg')}
              className='svg-icon-1 me-2 text-primary'
            />
            Retourner
          </button>
        </div>

        <div
          className='d-flex flex-column justify-content-between'
          style={{height: '1700px'}}
          ref={targetRef}
        >
          <DocumentHeader />
          <DocumentBody />
          <DocumentFooter />
        </div>
      </div>
    )
  }

  return <div></div>
}

export {DocumentPrivew}
