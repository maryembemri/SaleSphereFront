// @ts-nocheck
import {Column} from 'react-table'
import {BankAccountActionsCell} from './BankAccountActionsCell'
import {BankAccount} from '../../../../../../_metronic/helpers/models'
import {BankAccountCustomHeader} from './BankAccountCustomHeader'

const bankAccountsColumns: ReadonlyArray<Column<BankAccount>> = [
  {
    Header: (props) => (
      <BankAccountCustomHeader tableProps={props} title='#' className='min-w-25px' />
    ),
    id: 'id',
    accessor: 'id',
  },
  {
    Header: (props) => (
      <BankAccountCustomHeader tableProps={props} title='Nom' className='min-w-125px' />
    ),
    id: 'designation',
    accessor: 'designation',
  },
  {
    Header: (props) => (
      <BankAccountCustomHeader tableProps={props} title='RIB' className='min-w-125px' />
    ),
    id: 'rib',
    accessor: 'rib',
  },
  {
    Header: (props) => (
      <BankAccountCustomHeader tableProps={props} title='Nom de banque' className='min-w-125px' />
    ),
    id: 'bank',
    accessor: 'bank',
  },

  {
    Header: (props) => (
      <BankAccountCustomHeader
        tableProps={props}
        title='Actions'
        className='text-end min-w-100px'
      />
    ),
    id: 'actions',
    Cell: ({...props}) => (
      <BankAccountActionsCell
        id={props.data[props.row.index].id}
        isActive={props.data[props.row.index].isActive}
      />
    ),
  },
]

export {bankAccountsColumns}
