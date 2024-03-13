/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {Link} from 'react-router-dom'
import {SVG} from '../../../helpers'

const HeaderEasyAccessMenu: FC = () => {
  return (
    <div
      className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg menu-state-primary fw-bold py-4 px-2 fs-6 w-200px'
      data-menu='true'
    >
      <div className='text-gray-800 ps-2'>Actions Rapides</div>
      <div className='separator my-2'></div>
      <div className='menu-item'>
        <Link to='/sale/estimate/add' className='menu-link px-5'>
          <SVG path='/media/icons/duotune/files/fil005.svg' className='svg-icon-3 me-2' />
          <span className='menu-text'>Devis</span>
        </Link>
      </div>

      <div className='menu-item'>
        <Link to='/sale/invoice/add' className='menu-link px-5'>
          <SVG path='/media/icons/duotune/files/fil005.svg' className='svg-icon-3 me-2' />
          Facture
        </Link>
      </div>
      <div className='menu-item'>
        <Link to='/client/list/add' className='menu-link px-5'>
          <SVG path='/media/icons/duotune/communication/com013.svg' className='svg-icon-3 me-2' />
          Client
        </Link>
      </div>
      <div className='menu-item'>
        <Link to='/suppliers/list/add' className='menu-link px-5'>
          <SVG path='/media/icons/duotune/ecommerce/ecm006.svg' className='svg-icon-3 me-2' />
          Fournisseur
        </Link>
      </div>
      <div className='menu-item'>
        <Link to='/article/list/add' className='menu-link px-5'>
          <SVG path='/media/icons/duotune/general/gen017.svg' className='svg-icon-3 me-2' />
          Article
        </Link>
      </div>
    </div>
  )
}

export {HeaderEasyAccessMenu}
