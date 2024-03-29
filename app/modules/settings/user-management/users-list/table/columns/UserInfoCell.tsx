/* eslint-disable-next-line jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import {FC} from 'react'
import {User} from '../../../core/models'

type Props = {
  user: User
}

const UserInfoCell: FC<Props> = ({user}) => (
  <div className='d-flex align-items-center'>
    {/* begin:: Avatar */}
    <div className='symbol symbol-circle symbol-50px overflow-hidden me-3'>
      <a href='#'>
        <div className={clsx('symbol-label fs-3', `bg-light-primary`, `text-primary`)}>
          {user.name ? user.name[0] : ''}
        </div>
      </a>
    </div>
    <div className='d-flex flex-column'>
      <a href='#' className='text-gray-800 text-hover-primary mb-1'>
        {user.name}
      </a>
      <span>{user.email}</span>
    </div>
  </div>
)

export {UserInfoCell}
