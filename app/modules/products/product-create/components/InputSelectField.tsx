import React, {FC} from 'react'
import {Icon} from '../../../../../_metronic/helpers'

type Props = {
  children: React.ReactNode
  label: string
  name: string
}
const InputSelectField: FC<Props> = ({children, label, name}) => {
  return (
    <div className='col-12 col-sm-4 mt-2'>
      <label className='form-label required'>{label}</label>
      <div className='d-flex justify-content-center'>
        {children}
        <div
          className='btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-success w-40px h-40px ms-2'
          data-bs-toggle='modal'
          data-bs-target='#modal_create_color'
        >
          <Icon iconName='plus' className={'fs-1'} />
        </div>
      </div>
    </div>
  )
}

export default InputSelectField
