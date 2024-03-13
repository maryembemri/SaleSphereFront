import {FC} from 'react'

type Props = {
  last_login?: string
}

const UserPermissionsCell: FC<Props> = ({last_login}) => (
  <div className='badge badge-light fw-bolder'>--</div>
)

export {UserPermissionsCell}
