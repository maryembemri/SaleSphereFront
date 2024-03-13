import React, {FC, ReactNode} from 'react'
type Props = {
  title: string
  children: ReactNode
  color?: 'primary' | 'success' | 'danger' | 'info' | 'warning'
}
const DetailsCard: FC<Props> = ({title, children, color}) => {
  return (
    <div className='col-6 col-lg-3'>
      <div className='card h-100'>
        <div className='card-body d-flex flex-column gap-3'>
          <div className='d-flex gap-4 align-items-center'>
            <div className='symbol symbol-20px'>
              <div className={`symbol-label ${color ? 'bg-' + color : 'bg-secondary'}`}></div>
            </div>
            <div className='fs-5 fw-normal text-gray-700'>{title}</div>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default DetailsCard
