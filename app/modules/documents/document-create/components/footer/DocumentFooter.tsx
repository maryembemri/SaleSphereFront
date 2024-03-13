import {FC, useEffect} from 'react'
import {useDocumentView} from '../../core/DocumentViewProvider'
import {useDocumentContext} from '../../core/DocumentFormProvider'
import {Currency} from '../../../../../../_metronic/helpers'

const ProductFooter: FC = () => {
  const {code} = useDocumentView()
  const {items, formData, setFormData} = useDocumentContext()

  const stamp = code === 'FA' ? 1 : 0

  const subtotal = items.reduce((prev, curr) => {
    if (curr.product) return prev + curr.price * curr.quantity
    else return prev
  }, 0)

  const tax = formData.client?.isExempt
    ? 0
    : items.reduce((prev, curr) => {
        if (curr.product) return prev + (curr.tax * curr.price * curr.quantity) / 100
        else return prev
      }, 0)

  // const discountRate = (discount * subtotal) / 100;
  const total = subtotal + tax + stamp

  useEffect(() => {
    setFormData({...formData, total, subtotal, tax})
  }, [formData, total, subtotal, tax])

  return (
    <section className='d-flex justify-content-between mt-15'>
      <div className='col'></div>
      <div className='col-12 col-sm-4'>
        <hr className='h-4px opacity-100 bg-gray-300 border-0 mb-0' />
        <div className='d-flex flex-stack py-2 px-6 border fs-4'>
          <span className='pe-10 text-gray-600'>TOTAL HT:</span>
          <span className='text-end text-gray-800'>
            <Currency value={formData.subtotal} /> TND
          </span>
        </div>
        <div className='d-flex flex-stack py-2 px-6 border fs-4'>
          <span className='pe-10 text-gray-600'>TVA:</span>
          <span className='text-end text-gray-800'>
            <Currency value={formData.tax} /> TND
          </span>
        </div>

        <div className='d-flex flex-stack py-2 px-6 border fs-4'>
          <span className='pe-10 text-gray-600'>TOTAL TTC:</span>
          <span className='text-end text-gray-800'>
            <Currency value={formData.total} /> TND
          </span>
        </div>
        {code === 'FA' && (
          <div className='d-flex flex-stack py-2 px-6 border fs-4'>
            <span className='pe-10 text-gray-600'>Timbre Fiscal:</span>
            <span className='text-end text-gray-800'>
              <Currency value={stamp} /> TND
            </span>
          </div>
        )}
        <div className='d-flex flex-stack py-2 px-6 border fs-4 bg-light fw-bold '>
          <span className='pe-10 text-gray-600 '>Net a payer:</span>
          <span className='text-end text-gray-800'>
            <Currency value={formData.total} /> TND
          </span>
        </div>
      </div>
    </section>
  )
}

const DocumentFooter: FC = () => {
  const {type} = useDocumentView()
  return <ProductFooter />
}

export default DocumentFooter
