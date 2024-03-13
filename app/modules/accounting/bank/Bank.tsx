import React from 'react'
import BankCard from './components/BankCard'
import {SVG} from '../../../../_metronic/helpers'

const Bank = () => {
  const banks = [
    {
      id: 0,
      bank: 'Attijari Bank',
      bankLogo: 'attijari',
      amount: 85347.4,
      devis: 'tnd',
      rib: 'TN59 01478 0689 0457 0457 0548',
      lastOperation: '10-10-2023',
    },
    {
      id: 0,
      bank: 'Banque Internationale Arabe de Tunisie',
      bankLogo: 'biat',
      amount: 467681.0,
      devis: 'tnd',
      rib: 'ES71 4500 4578 6631 4521 6654',
      lastOperation: '10-10-2023',
    },
  ]
  return (
    <div className='row g-4'>
      {banks.map((item) => (
        <div key={item.id} className='col-4'>
          <BankCard
            id={item.id}
            bank={item.bank}
            bankLogo={item.bankLogo}
            amount={item.amount}
            devis={item.devis}
            rib={item.rib}
            lastOperation={item.lastOperation}
          />
        </div>
      ))}
      <div className='col-4'>
        <div className='card h-100 border-dashed border-2 border-hover-primary bg-hover-light-primary cursor-pointer'>
          <div className='card-body d-flex flex-column align-items-center justify-content-center gap-4'>
            <div className='fs-4 fw-semibold text-gray-600'>Ajouter un compte Bancaire</div>
            <SVG path='/media/icons/duotune/general/gen041.svg' className='svg-icon-4x' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bank
