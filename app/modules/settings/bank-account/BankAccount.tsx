import React, {FC} from 'react'
import {BankAccountsTable} from './table/BankAccountsTable'

const BankAccount: FC = () => {
  return (
    <div className='card w-100 mb-5 mb-xl-10'>
      <div className='card-header'>
        <h2 className='card-title'>Compte Bancaire</h2>
        <div className='card-toolbar'>
          <button className='btn btn-sm btn-success'>
            <i className='bi bi-plus-lg'></i>
            Ajouter
          </button>
        </div>
      </div>
      <BankAccountsTable />
    </div>
  )
}

export default BankAccount
