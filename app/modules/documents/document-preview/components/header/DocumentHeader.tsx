import {toAbsoluteUrl} from '../../../../../../_metronic/helpers'
import {useDocumentResponseData} from '../../core/DocumentResponseProvider'

const DocumentHeader = () => {
  const data = useDocumentResponseData()?.document
  return (
    <div className='card-header border-0 px-20 p-10'>
      <div className='card-toolbar d-flex flex-column align-items-start'>
        <img
          src={toAbsoluteUrl('/media/logos/logo.png')}
          className='h-150px rounded-3'
          alt='Logo'
        />
        <p className='text-sm-start fw-semibold fs-4 text-muted mt-3'></p>
      </div>
      <div className='card-title'>
        <h1 className='fw-semibold text-gray-800 fs-4qx pe-5 pb-7'>{data?.reference}</h1>
      </div>
    </div>
  )
}

export default DocumentHeader
