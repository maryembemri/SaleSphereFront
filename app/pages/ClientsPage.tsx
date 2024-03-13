import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../_metronic/layout/core'
import {ClientsListWrapper} from '../modules/client/clients-list/ClientsList'
import ClientCreate from '../modules/client/client-create/ClientCreate'
import ClientInformations from '../modules/client/client-show/components/ClientInformations'
import ClientShowHeader from '../modules/client/client-show/ClientShowHeader'
import {ClientResponseProvider} from '../modules/client/client-show/core/ClientResponseProvider'

const clientsBreadcrumbs: Array<PageLink> = [
  {
    title: 'Clients',
    path: '/client',
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
const ClientsPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='/list'
          element={
            <>
              <PageTitle breadcrumbs={clientsBreadcrumbs}>Liste des clients</PageTitle>
              <ClientsListWrapper />
            </>
          }
        />
        <Route
          path='list/add'
          element={
            <>
              <PageTitle breadcrumbs={clientsBreadcrumbs}>Ajouter Client</PageTitle>
              <ClientCreate />
            </>
          }
        />
        <Route
          path='list/edit/:id'
          element={
            <>
              <PageTitle breadcrumbs={clientsBreadcrumbs}>Modifier Client</PageTitle>
              <ClientCreate />
            </>
          }
        />
        <Route
          path='list/show/:id'
          element={
            <ClientResponseProvider>
              <ClientShowHeader />
              <Outlet />
            </ClientResponseProvider>
          }
        >
          <Route
            path='informations'
            element={
              <>
                <PageTitle breadcrumbs={clientsBreadcrumbs}>Détails Client</PageTitle>
                <ClientInformations />
              </>
            }
          />
          {/*
          <Route
            path='stock'
            element={
              <>
                <PageTitle breadcrumbs={clientsListBreadcrumbs}>Stock</PageTitle>
                <Invetory />
              </>
            }
          />
          */}
          <Route index element={<Navigate to='/client/list/show/:id/informations' />} />
        </Route>
      </Route>
      <Route index element={<Navigate to='/client/list' />} />
    </Routes>
  )
}

export default ClientsPage
