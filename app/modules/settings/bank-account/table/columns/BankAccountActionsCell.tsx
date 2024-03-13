/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {SVG} from '../../../../../../_metronic/helpers'

type Props = {
  id: number
  isActive: boolean
}

const BankAccountActionsCell: FC<Props> = ({id, isActive}) => {
  return (
    <div className='d-flex justify-content-center align-items-center'>
      <div className='form-switch'>
        <input
          className='form-check-input'
          type='checkbox'
          id='flexSwitchCheckDefault'
          defaultChecked={isActive}
        />
      </div>
      <button className='btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary p-0'>
        <SVG path='/media/icons/duotune/general/gen055.svg' className='svg-icon-1 cursor-pointer' />
      </button>
    </div>
  )
}

export {BankAccountActionsCell}
