import {useDocumentView} from '../../core/DocumentViewProvider'
import {useDocumentContext} from '../../core/DocumentFormProvider'
import {ChangeEvent} from 'react'
import SelectClient from './SelectClient'

const DocumentHeader: React.FC = () => {
  const {title, type} = useDocumentView()
  const {formData, setFormData} = useDocumentContext()

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, date: e.target.value})
  }

  const handleNoteChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({...formData, note: e.target.value})
  }

  return (
    <section>
      <div className='d-flex flex-center flex-equal text-nowrap'>
        <span className='fs-3x fw-bold text-gray-800 mb-10'>{title?.toUpperCase()}</span>
      </div>

      <div className='row d-flex justify-content-between'>
        <div className={`col-12 col-sm-5 mb-10 ${type === 'sales' ? 'order-2' : 'order-1'}`}>
          <SelectClient />
        </div>
        <div className={`col-12 col-sm-5 mb-10 ${type === 'sales' ? 'order-1' : 'order-2'}`}>
          <h2 className='fw-bold fs-2 capitlize'> Détails {title?.toLocaleLowerCase()}</h2>
          <hr className='h-4px opacity-100 bg-gray-300 border-0' />
          <div>
            <div className='flex-root d-flex mb-2'>
              <label className='form-label fw-semibold text-gray-600 w-50'>Date du document</label>
              <input
                type='date'
                name='date'
                value={formData.date}
                defaultValue={new Date().toISOString().substring(0, 10)}
                onChange={handleDateChange}
                className='form-control fs-5 form-control-sm'
              />
            </div>

            {/* <div className='flex-root d-flex mb-2'>
              <label className='form-label fw-semibold text-gray-600 w-50' htmlFor='invoiceNumber'>
                Referance Facture:
              </label>
              <div className='input-group input-group-sm'>
                <span className='input-group-text'>{code}</span>
                <input
                  className='form-control form-control-sm'
                  type='text'
                  name='referance'
                  id='documentNumber'
                  min='1'
                  step='1'
                  value={formData.reference}
                  onChange={handleReferenceChange}
                />
              </div>
            </div>
            <div className='flex-root d-flex mb-2'>
              <label className='form-label fw-semibold text-gray-600 w-50'>Cassier</label>
              <input
                type='text'
                className='form-control form-control-sm fs-5'
                disabled
                defaultValue={'{Current User}'}
              />
            </div>
            <div className='flex-root d-flex mb-2'>
              <label className='form-label fw-semibold text-gray-600 w-50'>Project</label>
              <input type='text' disabled className='form-control form-control-sm fs-5' />
            </div> */}

            <div className='flex-root d-flex mb-2'>
              <label className='form-label fw-semibold text-gray-600 w-50'>Note</label>
              <textarea
                onChange={handleNoteChange}
                value={formData.note}
                className='form-control form-control-sm fs-5'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DocumentHeader
