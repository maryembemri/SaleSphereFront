import React, {FC} from 'react'
import {Currency} from '../../../../../_metronic/helpers'
import {Icon, toAbsoluteUrl} from '../../../../../_metronic/helpers'

type Props = {
  id: number
  bank: string
  bankLogo: string
  amount: number
  devis: string
  rib: string
  lastOperation: string
  className?: string
}

const BankCard: FC<Props> = ({
  id,
  bank,
  bankLogo,
  amount,
  devis,
  rib,
  lastOperation,
  className,
}) => {
  return (
    <div className={`card cursor-pointer ${className}`}>
      <div
        className='card-body m-5 py-2 card bgi-no-repeat bgi-size-contain bgi-position-x-end'
        style={{
          backgroundColor: '#d8d8d8',
          backgroundImage: `url('${toAbsoluteUrl('/media/svg/shapes/wave-bg-dark.svg')}')`,
        }}
      >
        <div className='d-flex flex-stack h-60px'>
          <div className='fs-2'>{bank}</div>
          <div>
            <img
              src={toAbsoluteUrl('/media/banks/' + bankLogo + '.png')}
              alt='Bank'
              className='h-45px w-45px'
            />
          </div>
        </div>

        <div className='fs-2 mb-5 fw-bolder text-gray-700'>
          <Currency value={amount} />
        </div>

        <div className='d-flex flex-stack mb-3'>
          <div>
            <img src={toAbsoluteUrl('/media/banks/ship.png')} alt='Bank' className='h-40px' />
          </div>
          <div></div>
        </div>

        <div className='fs-4'>{rib}</div>
        <div className='fs-8'>Dernière opération 09/10/2023 à 14:14:30</div>
      </div>
      <div className='card-footer text-center py-3'>
        <button className='btn btn-primary'>
          <Icon iconName={'eye'} className='fs-2' />
          Détail
        </button>
      </div>
    </div>
  )
}

export default BankCard
