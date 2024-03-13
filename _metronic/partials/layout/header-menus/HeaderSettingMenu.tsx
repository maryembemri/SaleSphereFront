/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {Link} from 'react-router-dom'
import {useAuth} from '../../../../app/modules/auth'
import {Languages} from './Languages'
import {SVG, toAbsoluteUrl} from '../../../helpers'

const HeaderSettingMenu: FC = () => {
  const {currentUser, logout} = useAuth()
  return (
    <div
      className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg menu-state-primary fw-bold py-4 px-2 fs-6 w-225px'
      data-menu='true'
    >
      <div className='text-gray-800 ps-2'>Paramètres</div>
      <div className='separator my-2'></div>
      <div className='menu-item'>
        <Link to='/settings/company' className='menu-link px-5'>
          <SVG path='/media/icons/duotune/general/gen002.svg' className='svg-icon-3 me-2' />
          <span className='menu-text'>Entreprise</span>
        </Link>
      </div>
      {/* <div className='menu-item'>
        <Link to={'/settings/company'} className='menu-link px-5'>
          <SVG path='/media/icons/duotune/files/fil003.svg' className='svg-icon-3 me-2' />
          Document
        </Link>
      </div> */}
      <div className='menu-item'>
        <Link to='/settings/vat' className='menu-link px-5'>
          <SVG path='/media/icons/duotune/finance/fin001.svg' className='svg-icon-3 me-2' />
          TVA
        </Link>
      </div>
      <div className='menu-item'>
        <Link to='/settings/user' className='menu-link px-5'>
          <SVG path='/media/icons/duotune/general/gen049.svg' className='svg-icon-3 me-2' />
          Utilisateur
        </Link>
      </div>
      <div className='menu-item'>
        <Link to='/settings/bank-account' className='menu-link px-5'>
          <SVG path='/media/icons/duotune/finance/fin002.svg' className='svg-icon-3 me-2' />
          Compte Bancaire
        </Link>
      </div>
      {/* <div className='menu-item'>
        <Link to={'/settings/company'} className='menu-link px-5'>
          <SVG path='/media/icons/duotune/finance/fin004.svg' className='svg-icon-3 me-2' />
          List des prix
        </Link>
      </div> */}

      {/* <div className='separator my-2'></div> */}
    </div>
  )
}

export {HeaderSettingMenu}
