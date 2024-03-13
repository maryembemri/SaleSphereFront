import React from 'react'
import VatTable from './table/VatTable'

const VatList = () => {
  return (
    <div className='card'>
      <div className='card-header'>
        <h2 className='card-title'>TVA</h2>
        <div className='card-toolbar'>
          <button className='btn btn-sm btn-success'>
            <i className='bi bi-plus-lg'></i>Ajouter
          </button>
        </div>
      </div>

      <VatTable />
    </div>
  )
}

const VatListWrapper = () => {
  return <VatList />
}

export default VatListWrapper
