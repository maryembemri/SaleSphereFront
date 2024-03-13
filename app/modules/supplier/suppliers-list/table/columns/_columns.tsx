import {Column} from 'react-table'
import {SupplierSalesCell} from './SupplierSalesCell'
import {SupplierActionsCell} from './SupplierActionsCell'
import {SupplierCustomHeader} from './SupplierCustomHeader'
import SupplierInfoCell from './SupplierInfoCell'
import {formatDate} from '../../../../../../_metronic/helpers'
import SupplierContactCell from './SupplierContactCell'
import {Supplier} from '../../../core/models'

const suppliersColumns: ReadonlyArray<Column<Supplier>> = [
  {
    Header: (props) => (
      <SupplierCustomHeader tableProps={props} title='Référence' className='min-w-100px' />
    ),
    id: 'reference',
    accessor: ({...props}) => props.reference,
  },
  {
    Header: (props) => (
      <SupplierCustomHeader
        tableProps={props}
        title='Raison Sociale / Adresse'
        className='min-w-150px'
      />
    ),
    id: 'name',
    Cell: ({...props}) => <SupplierInfoCell supplier={props.data[props.row.index]} />,
  },

  {
    Header: (props) => (
      <SupplierCustomHeader tableProps={props} title='Contact' className='min-w-200px' />
    ),
    id: 'contact',
    Cell: ({...props}) => <SupplierContactCell supplier={props.data[props.row.index]} />,
  },
  {
    Header: (props) => (
      <SupplierCustomHeader
        tableProps={props}
        title={`Chiffre d'affaires`}
        className='min-w-150px'
      />
    ),
    id: 'revenue',
    Cell: ({...props}) => <SupplierSalesCell value={props.data[props.row.index].revenue} />,
  },

  {
    Header: (props) => (
      <SupplierCustomHeader tableProps={props} title='Crée le' className='min-w-100px' />
    ),
    id: 'createdAt',
    accessor: ({...props}) => formatDate(props.createdAt),
  },

  {
    Header: (props) => (
      <SupplierCustomHeader tableProps={props} title='Actions' className='min-w-125px text-end' />
    ),
    id: 'actions',
    Cell: ({...props}) => <SupplierActionsCell supplier={props.data[props.row.index]} />,
  },
]

export {suppliersColumns}
