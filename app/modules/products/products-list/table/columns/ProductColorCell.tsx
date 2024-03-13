import {FC} from 'react'
import {Color} from '../../../core/models'

type Props = {
  color?: Color
}

const ProductColorCell: FC<Props> = ({color}) => {
  if (color === undefined) return <div>--</div>
  return (
    <div className='text-grey-600 fs-6 fw-semibold d-flex align-items-middle'>
      <i className='fa fa-genderless fs-1 me-2 ' style={{color: '#' + color?.hexCode}} />
      {color?.label.toUpperCase()}
    </div>
  )
}

export {ProductColorCell}
