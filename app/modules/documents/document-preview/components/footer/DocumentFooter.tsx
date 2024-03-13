import React from 'react'
import {useDocumentResponse} from '../../core/DocumentResponseProvider'
import {ToWords} from 'to-words'
import {useAuth} from '../../../../auth'
const toWords = new ToWords({
  localeCode: 'fr-FR',
  converterOptions: {
    currency: true,
    ignoreDecimal: false,
    ignoreZeroCurrency: false,
    doNotAddOnly: false,
    currencyOptions: {
      // can be used to override defaults for the selected locale
      name: 'Dinar',
      plural: 'Dinars',
      symbol: 'TND',
      fractionalUnit: {
        name: 'Millime ',
        plural: 'Millimes',
        symbol: '',
      },
    },
  },
})

const DocumentFooter = () => {
  const {currentUser} = useAuth()
  const company = currentUser?.company
  const {response} = useDocumentResponse()
  return (
    <>
      <div className='pb-10'>
        {response?.document.code === 'FV' && (
          <div className='px-10 fs-5 text-gray-800 fw-bold'>
            <span className='fw-normal text-gray-600 me-2'>Le montant total de facture est</span>
            {toWords.convert(response.document.total)}.
          </div>
        )}
        {response?.document.note && (
          <div className='px-10 fs-5 text-gray-600'>
            <span className='fw-bold text-gray-800 me-2'>Note:</span>
            {response?.document.note}
          </div>
        )}
      </div>

      <div className='card-footer border-top-3 border-primary d-flex justify-content-between'>
        <div>
          <h3 className=''>Entreprise</h3>
          <div>{company?.address}</div>

          <div>Reg de commerce: --</div>
          <div>Code TVA: {company?.fiscalCode}</div>
        </div>
        <div className=''>
          <h3 className=''>Informations de contact</h3>
          <div>{company?.email || '--'}</div>
          <div>{company?.mobile ? '+216 ' + company?.mobile : '--'}</div>
          <div>{company?.phone ? '+216 ' + company?.phone : '--'}</div>
        </div>
        <div className=''>
          <h3>Informations Bancaire</h3>
          <div>Banque: BANQUE X</div>
          <div>iBAN: TN00 00 000 000 00000000000 00</div>
        </div>
        {/* <div className=''>
          <h3>Informations Bancaire</h3>
          <div>Banque: BANQUE ZITOUNA</div>
          <div>iBAN: TN59 25 093 000 0001186391 40</div>
        </div> */}
      </div>
    </>
  )
}

export default DocumentFooter
