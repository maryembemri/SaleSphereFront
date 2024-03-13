import {Routes, Route, Outlet} from 'react-router-dom'
import {PageLink, PageTitle} from '../../_metronic/layout/core'
import BankAccount from '../modules/settings/bank-account/BankAccount'
import CompanySettings from '../modules/settings/company/CompanySettings'
import SettingsNavbar from '../modules/settings/SettingsNavbar'
import VatListWrapper from '../modules/settings/vat/VatList'
import {UsersListWrapper} from '../modules/settings/user-management/users-list/UsersList'

const companyBreadCrumbs: Array<PageLink> = [
  {
    title: 'Parametere',
    path: '/settings/company',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const SettingsPage = () => (
  <Routes>
    <Route
      element={
        <div className='d-flex flex-column'>
          <SettingsNavbar />
          <Outlet />
        </div>
      }
    >
      <Route
        path='company'
        element={
          <>
            <PageTitle breadcrumbs={companyBreadCrumbs}>Entreprise</PageTitle>
            <CompanySettings />
          </>
        }
      />

      <Route
        path='vat'
        element={
          <>
            <PageTitle breadcrumbs={companyBreadCrumbs}>TVA</PageTitle>
            <VatListWrapper />
          </>
        }
      />
      <Route
        path='user'
        element={
          <>
            <PageTitle breadcrumbs={companyBreadCrumbs}>Utilisateur</PageTitle>
            <UsersListWrapper />
          </>
        }
      />
      <Route
        path='bank-account'
        element={
          <>
            <PageTitle breadcrumbs={companyBreadCrumbs}>Compte Bancaire</PageTitle> <BankAccount />
          </>
        }
      />
    </Route>
  </Routes>
)

export default SettingsPage
