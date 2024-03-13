import {Column} from 'react-table'
import {DocumentStateCell} from './DocumentStateCell'
import {DocumentCustomHeader} from './DocumentCustomHeader'
import DocumentClientCell from './DocumentClientCell'
import {Link} from 'react-router-dom'
import {formatDate} from '../../../../../../../_metronic/helpers'
import {StockMovement} from '../../core/_init'

const documentsColumns: ReadonlyArray<Column<StockMovement>> = [
  {
    Header: (props) => (
      <DocumentCustomHeader tableProps={props} title='Date' className='min-w-100px' />
    ),
    id: 'date',
    accessor: ({document}) => formatDate(document.date),
  },
  {
    Header: (props) => (
      <DocumentCustomHeader tableProps={props} title='Référence' className='min-w-100px' />
    ),
    id: 'reference',
    Cell: ({...props}) => (
      <Link
        to={`../document/preview/${props.data[props.row.index].document.id}`}
        className='fw-800 fs-4 text-primary cursor-pointer'
      >
        {props.data[props.row.index].document.reference}
      </Link>
    ),
  },

  {
    Header: (props) => (
      <DocumentCustomHeader tableProps={props} title='État' className='min-w-100px' />
    ),
    id: 'statusId',
    Cell: ({...props}) => <DocumentStateCell state={props.data[props.row.index].document.status} />,
  },

  {
    Header: (props) => (
      <DocumentCustomHeader tableProps={props} title='Client' className='min-w-125px' />
    ),
    id: 'clientId',
    Cell: ({...props}) => (
      <DocumentClientCell
        client={props.data[props.row.index].document.client}
        supplier={props.data[props.row.index].document.supplier}
      />
    ),
  },

  {
    Header: (props) => (
      <DocumentCustomHeader tableProps={props} title='Quantité sortonte' className='min-w-100px' />
    ),
    id: 'item.quantity',
    accessor: ({item}) => item.quantity,
  },
]

export {documentsColumns}
