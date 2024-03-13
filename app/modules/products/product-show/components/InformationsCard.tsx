import React, {FC} from 'react'
type Props = {
  title: string
  color?: 'primary' | 'success' | 'danger' | 'info' | 'warning'
  data: RowProps[]
}

type RowProps = {
  title: string
  content: string
  color?: 'primary' | 'success' | 'danger' | 'info' | 'warning'
}

const RowItem: FC<RowProps> = ({title, content, color}) => (
  <li className='d-flex align-items-center'>
    <span
      className={`bullet bullet-vertical me-5 h-100 ${color ? 'bg-' + color : 'bg-secondary'}`}
    ></span>
    <div className='d-flex flex-column gap-1'>
      <div className='fs-5 text-gray-700'>{title}</div>
      <div className='d-flex fs-3'>
        <span className='svg-icon svg-icon-1 me-1'></span>
        <div className='fw-bold'>{content}</div>
      </div>
    </div>
  </li>
)

const InformationsCard: FC<Props> = ({title, color, data}) => {
  return (
    <div className='col-lg-4'>
      <div className='card h-100'>
        <div className='card-header border-bottom-0'>
          <div className='card-title text-gray-800 fw-bold fs-1'>{title}</div>
        </div>
        <div className='card-body d-flex flex-column gap-4 pt-0'>
          {data.map((item, index) => (
            <RowItem key={index} title={item.title} content={item.content} color={color} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default InformationsCard
