import {Column} from 'react-table'
import {ClientSalesCell} from './ClientSalesCell'
import {ClientActionsCell} from './ClientActionsCell'
import {ClientCustomHeader} from './ClientCustomHeader'
import ClientInfoCell from './ClientInfoCell'
import {formatDate} from '../../../../../../_metronic/helpers'
import ClientContactCell from './ClientContactCell'
import {Client} from '../../../core/_models'

const clientsColumns: ReadonlyArray<Column<Client>> = [
  {
    Header: (props) => (
      <ClientCustomHeader tableProps={props} title='Référence' className='min-w-100px' />
    ),
    id: 'reference',
    accessor: ({...props}) => props.reference,
  },
  {
    Header: (props) => (
      <ClientCustomHeader
        tableProps={props}
        title='Raison Sociale / Matricule'
        className='min-w-150px'
      />
    ),
    id: 'name',
    Cell: ({...props}) => <ClientInfoCell client={props.data[props.row.index]} />,
  },

  {
    Header: (props) => (
      <ClientCustomHeader tableProps={props} title='Contact' className='min-w-200px' />
    ),
    id: 'contact',
    Cell: ({...props}) => <ClientContactCell client={props.data[props.row.index]} />,
  },
  {
    Header: (props) => (
      <ClientCustomHeader tableProps={props} title={`Chiffre d'affaires`} className='min-w-150px' />
    ),
    id: 'revenue',
    Cell: ({...props}) => <ClientSalesCell value={props.data[props.row.index].revenue} />,
  },

  {
    Header: (props) => (
      <ClientCustomHeader tableProps={props} title='Crée le' className='min-w-100px' />
    ),
    id: 'createdAt',
    accessor: ({...props}) => formatDate(props.createdAt),
  },

  {
    Header: (props) => (
      <ClientCustomHeader tableProps={props} title='Actions' className='min-w-125px text-end' />
    ),
    id: 'actions',
    Cell: ({...props}) => <ClientActionsCell client={props.data[props.row.index]} />,
  },
]

export {clientsColumns}
