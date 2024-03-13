import {FC} from 'react'
import {Link, useLocation} from 'react-router-dom'
import {SVG} from '../../../_metronic/helpers'

const SettingsNavbar: FC = () => {
  const location = useLocation()
  return (
    <div className='card mb-5'>
      <div className='card-body py-2 px-4'>
        <ul className='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap'>
          <li className='nav-item'>
            <Link
              className={`nav-link me-6 ` + (location.pathname === '/settings/company' && 'active')}
              to='/settings/company'
            >
              <SVG path='/media/icons/duotune/general/gen002.svg' className='svg-icon-3 me-2' />
              Entreprise
            </Link>
          </li>

          <li className='nav-item'>
            <Link
              className={`nav-link me-6 ` + (location.pathname === '/settings/vat' && 'active')}
              to='/settings/vat'
            >
              <SVG path='/media/icons/duotune/finance/fin001.svg' className='svg-icon-3 me-2' />
              TVA
            </Link>
          </li>

          <li className='nav-item'>
            <Link
              className={`nav-link me-6 ` + (location.pathname === '/settings/user' && 'active')}
              to='/settings/user'
            >
              <SVG path='/media/icons/duotune/general/gen049.svg' className='svg-icon-3 me-2' />
              Utilisateur
            </Link>
          </li>

          <li className='nav-item'>
            <Link
              className={
                `nav-link me-6 ` + (location.pathname === '/settings/bank-account' && 'active')
              }
              to='/settings/bank-account'
            >
              <SVG path='/media/icons/duotune/finance/fin002.svg' className='svg-icon-3 me-2' />
              Compte Bancaire
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SettingsNavbar
