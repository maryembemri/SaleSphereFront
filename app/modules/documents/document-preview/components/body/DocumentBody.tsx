import {FC} from 'react'
import {Currency} from '../../../../../../_metronic/helpers'
import ClientDetails from './ClientDetails'
import DocumentsDetails from '../header/DocumentDetails'
import ItemRow from './ItemRow'

import {useDocumentResponse} from '../../core/DocumentResponseProvider'
import SupplierDetails from './SupplierDetails'

const DocumentBody: FC = () => {
  const {response} = useDocumentResponse()

  const document = response?.document
  const items = response?.items

  const stamp = document?.code === 'FV' ? 0.6 : 0

  return (
    <section className='card-body'>
      <div className='d-flex mb-10'>
        {document?.client && <ClientDetails client={document.client} />}
        <DocumentsDetails formData={document} />
        {document?.supplier && <SupplierDetails supplier={document.supplier} />}
      </div>

      <table className='table mb-20 mt-10'>
        <thead>
          <tr className='bg-light-primary fw-bold fs-2 border-top border-top-3 border-primary'>
            <th className='col-1 text-center'>#</th>
            <th className='col-1'>Référance</th>
            <th className='col-4'>Désignation</th>
            <th className='col-1'>Qnté</th>
            <th className='col-1'>Prix HT</th>
            <th className='col-1 text-center'>TVA</th>
            {document?.type === 'sales' && <th className='col-1 text-center'>Remise</th>}
            <th className='col-2 text-center'>Total HT</th>
          </tr>
        </thead>
        <tbody className='fs-4'>
          {items &&
            items.map((item, index) => (
              <>
                <tr
                  key={index}
                  className={item.description ? '' : 'border-bottom border-light-primary'}
                >
                  <ItemRow id={index + 1} item={item} />
                </tr>
                {item.description && (
                  <tr key={'d-' + index} className='border-bottom border-light-primary'>
                    <th colSpan={1} className='pt-0 text-end'>
                      <div className='fs-7 text-gray-800 fw-bold'> Note:</div>
                    </th>
                    <td className='pt-0' colSpan={7}>
                      <div className='fs-7 text-gray-600'>{item.description}</div>
                    </td>
                  </tr>
                )}
              </>
            ))}
        </tbody>
      </table>

      <div className='d-flex justify-content-end my-20'>
        <table className='table fs-3 table-striped mw-400px border-top border-top-3 border-primary'>
          <tbody>
            <tr>
              <th scope='row'>Total HT</th>
              <td className='col'>
                <Currency value={document?.subtotal} /> TND
              </td>
            </tr>
            <tr>
              <th scope='row'>Total TVA</th>
              <td>
                <Currency value={document?.tax} /> TND
              </td>
            </tr>
            <tr>
              <th scope='row'>Remise</th>
              <td>
                <Currency value={document?.discount} /> TND
              </td>
            </tr>
            <tr>
              <th scope='row'>Total TTC</th>
              <td>
                <Currency value={document?.total} /> TND
              </td>
            </tr>
            {document?.code === 'FV' && (
              <tr>
                <th scope='row'>Timbre Fiscal</th>
                <td>
                  <Currency value={stamp} /> TND
                </td>
              </tr>
            )}
            <tr className='fw-bold'>
              <th scope='row'>Net A Payer</th>
              <td>
                <Currency value={document?.total} /> TND
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default DocumentBody
