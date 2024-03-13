import React, {FC} from 'react'
import {Currency} from '../../../../../_metronic/helpers'
import {Icon} from '../../../../../_metronic/helpers'

type Props = {
  id: number
  title: string
  amount: number
  devis: string
  type: string
  className?: string
}

const CashCard: FC<Props> = ({id, title, amount, devis, type, className}) => {
  return (
    <div className={`card ${className}`}>
      <div className='card-body text-center'>
        <div className='w-100 text-muted fs-4 mb-10'>{title}</div>
        <div className='w-100 text-gray-600 fw-semibold fs-2'>Valeur</div>
        <div className='fs-1 mb-5 fw-bolder text-gray-700'>
          <Currency value={amount} /> <span className='ms-1'>{type}</span>
        </div>
        <div>
          <button className='btn btn-primary'>
            <Icon iconName={'eye'} className='fs-2' />
            Détail
          </button>
        </div>
      </div>
    </div>
  )
}

export default CashCard
