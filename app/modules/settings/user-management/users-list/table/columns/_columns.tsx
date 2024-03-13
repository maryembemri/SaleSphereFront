import {Column} from 'react-table'
import {UserInfoCell} from './UserInfoCell'
import {UserPermissionsCell} from './UserPermissionsCell'
import {UserActionsCell} from './UserActionsCell'
import {UserSelectionCell} from './UserSelectionCell'
import {UserCustomHeader} from './UserCustomHeader'
import {UserSelectionHeader} from './UserSelectionHeader'
import {User} from '../../../core/models'

const usersColumns: ReadonlyArray<Column<User>> = [
  {
    Header: (props) => <UserSelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <UserSelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Nom' className='min-w-125px' />,
    id: 'name',
    Cell: ({...props}) => <UserInfoCell user={props.data[props.row.index]} />,
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Position' className='min-w-125px' />
    ),
    accessor: 'position',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Last login' className='min-w-125px' />
    ),
    id: 'non',
    Cell: ({...props}) => <UserPermissionsCell />,
  },

  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Joined day' className='min-w-125px' />
    ),
    accessor: 'createdAt',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <UserActionsCell id={props.data[props.row.index].id} />,
  },
]

export {usersColumns}
