import {FC} from 'react'
import {Currency} from '../../../../../../_metronic/helpers'

type Props = {
  value?: number
}

const DocumentTTCCell: FC<Props> = ({value}) => (
  <div className='text-primary fs-6 fw-bold text-start'>
    <div className='d-flex gap-1 align-items-center'>
      <span className='fw-bold text-primary fs-4'>
        <Currency value={value || 0} decimal={2} />
      </span>
      <sup className='fs-9 text-muted fw-bold'>TND</sup>
    </div>
  </div>
)

export {DocumentTTCCell}
