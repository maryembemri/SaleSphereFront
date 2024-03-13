import {Column} from 'react-table'
import {DocumentTTCCell} from './DocumentTTCCell'
import {DocumentActionsCell} from './DocumentActionsCell'
import {DocumentStateCell} from './DocumentStateCell'
import {Document} from '../../../core/models'
import {DocumentCustomHeader} from './DocumentCustomHeader'
import DocumentClientCell from './DocumentClientCell'
import {Link} from 'react-router-dom'
import {formatDate} from '../../../../../../_metronic/helpers'

const documentsColumns: ReadonlyArray<Column<Document>> = [
  {
    Header: (props) => (
      <DocumentCustomHeader tableProps={props} title='Référence' className='min-w-100px' />
    ),
    id: 'reference',
    Cell: ({...props}) => (
      <Link
        to={`../document/preview/${props.data[props.row.index].id}`}
        className='fw-800 fs-4 text-primary cursor-pointer'
      >
        {props.data[props.row.index].reference}
      </Link>
    ),
  },
  {
    Header: (props) => (
      <DocumentCustomHeader tableProps={props} title='Date' className='min-w-100px' />
    ),
    id: 'date',
    accessor: ({date}) => formatDate(date),
  },
  {
    Header: (props) => (
      <DocumentCustomHeader
        tableProps={props}
        title='Client / Fournisseur'
        className='min-w-125px'
      />
    ),
    id: 'clientId',
    Cell: ({...props}) => (
      <DocumentClientCell
        client={props.data[props.row.index].client}
        supplier={props.data[props.row.index].supplier}
      />
    ),
  },

  {
    Header: (props) => (
      <DocumentCustomHeader tableProps={props} title='Montant TTC' className='min-w-200px' />
    ),
    id: 'total',
    Cell: ({...props}) => <DocumentTTCCell value={props.data[props.row.index].total} />,
  },

  {
    Header: (props) => (
      <DocumentCustomHeader tableProps={props} title='état' className='min-w-100px' />
    ),
    id: 'statusId',
    Cell: ({...props}) => <DocumentStateCell state={props.data[props.row.index].status} />,
  },

  {
    Header: (props) => (
      <DocumentCustomHeader tableProps={props} title='Actions' className='min-w-125px text-end' />
    ),
    id: 'actions',
    Cell: ({...props}) => <DocumentActionsCell document={props.data[props.row.index]} />,
  },
]

export {documentsColumns}
