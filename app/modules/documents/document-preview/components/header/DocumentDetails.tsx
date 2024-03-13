import {FC} from 'react'
import {FormData} from '../../../core/models'
import {formatDate} from '../../../../../../_metronic/helpers'
import {useDocumentView} from '../../../document-create/core/DocumentViewProvider'

const DocumentsDetails: FC<{formData?: FormData}> = ({formData}) => {
  const {title} = useDocumentView()
  return (
    <section className='w-100 mx-10'>
      <h2 className='fw-bold fs-1 pb-3 mb-5 border-bottom border-3 border-primary capitalize'>
        Détails Document
      </h2>

      {formData && (
        <div className='mb-10'>
          <div className='d-flex mb-3 fs-4'>
            <span className='fw-semibold text-gray-600 me-2'>Date:</span>
            <span className='fs-3'>{formatDate(formData?.date || '')}</span>
          </div>
          <div className='d-flex mb-3 fs-4'>
            <span className='fw-semibold text-gray-600 me-2'>Référance:</span>
            <span className='fs-3'>{formData.reference || '--'}</span>
          </div>
          <div className='d-flex mb-3 fs-4'>
            <span className='fw-semibold text-gray-600 me-2'>Projet:</span>
            <span className='fs-3'>--</span>
          </div>

          <div className='d-flex mb-3 fs-4'>
            <span className='fw-semibold text-gray-600 me-2'>Email:</span>
            <span className='fs-3'>--</span>
          </div>
        </div>
      )}
    </section>
  )
}

export default DocumentsDetails
