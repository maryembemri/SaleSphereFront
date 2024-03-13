import {Routes, Route, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../_metronic/layout/core'
import SupplierCreate from '../modules/supplier/supplier-create/SupplierCreate'
import {SuppliersListWrapper} from '../modules/supplier/suppliers-list/SuppliersList'
import SupplierShowHeader from '../modules/supplier/supplier-show/SupplierShowHeader'
import SupplierInformations from '../modules/supplier/supplier-show/components/SupplierInformations'
import {SupplierResponseProvider} from '../modules/supplier/supplier-show/core/SupplierResponseProvider'

const suppliersBreadcrumbs: Array<PageLink> = [
  {
    title: 'Fournisseur',
    path: '/suppliers',
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

const suppliersListBreadcrumbs: Array<PageLink> = [
  {
    title: 'Fournisseur',
    path: '/suppliers',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
  {
    title: 'Liste Fournisseurs',
    path: '/suppliers/list',
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

const SuppliersPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='/list'
          element={
            <>
              <PageTitle breadcrumbs={suppliersBreadcrumbs}>Liste Fournisseurs</PageTitle>
              <SuppliersListWrapper />
            </>
          }
        />
        <Route
          path='list/add'
          element={
            <>
              <PageTitle breadcrumbs={suppliersListBreadcrumbs}>Ajouter Fournisseur</PageTitle>
              <SupplierCreate />
            </>
          }
        />

        <Route
          path='list/edit/:id'
          element={
            <>
              <PageTitle breadcrumbs={suppliersListBreadcrumbs}>Modifier Fournisseur</PageTitle>
              <SupplierCreate />
            </>
          }
        />

        <Route
          path='list/show/:id'
          element={
            <SupplierResponseProvider>
              <SupplierShowHeader />
              <Outlet />
            </SupplierResponseProvider>
          }
        >
          <Route
            path='informations'
            element={
              <>
                <PageTitle breadcrumbs={suppliersListBreadcrumbs}>Détails Fournisseur</PageTitle>
                <SupplierInformations />
              </>
            }
          />
          {/*
          <Route
            path='stock'
            element={
              <>
                <PageTitle breadcrumbs={suppliersListBreadcrumbs}>Stock</PageTitle>
                <Invetory />
              </>
            }
          />
          */}
          <Route index element={<Navigate to='/suppliers/list/show/:id/informations' />} />
        </Route>
      </Route>
      <Route index element={<Navigate to='/suppliers/list' />} />
    </Routes>
  )
}

export default SuppliersPage
