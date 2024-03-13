import React from 'react'
import CashCard from './components/CashCard'

const CashManagement = () => {
  const cash = [
    {id: 0, title: 'Solde primaire', amount: 20702.69, devis: 'tnd', type: 'TTC'},
    {id: 2, title: 'Solde secondaire', amount: 6165.33, devis: 'tnd', type: 'TTC'},
  ]
  return (
    <div className='row g-4'>
      {cash.map((item) => (
        <div key={item.id} className='col-4'>
          <CashCard
            id={item.id}
            title={item.title}
            amount={item.amount}
            devis={item.devis}
            type={item.type}
          />
        </div>
      ))}
    </div>
  )
}

export default CashManagement
