import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../_metronic/layout/core'
import {DocumentsListWrapper} from '../modules/documents/documents-list/DocumentsList'
import DocumentCreateWrapper from '../modules/documents/document-create/DocumentCreate'
import {DocumentPrivew} from '../modules/documents/document-preview/DocumentPrivew'
import {DocumentFormProvider} from '../modules/documents/document-create/core/DocumentFormProvider'
import {DocumentResponseProvider} from '../modules/documents/document-preview/core/DocumentResponseProvider'
import CaisseCreateWrapper from '../modules/caisse/caisse-create/CaisseCreate'

const salesBreadcrumbs: Array<PageLink> = [
  {
    title: 'Vente',
    path: '/sale',
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

const salesListBreadcrumbs: Array<PageLink> = [
  {
    title: 'Vente',
    path: '/sale',
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
    title: 'List documents',
    path: '/sale/list',
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

const SalesPage = () => {
  return (
    <Routes>
      <Route
        element={
          <DocumentFormProvider>
            <Outlet />
          </DocumentFormProvider>
        }
      >
        <Route
          path='document/preview/:id'
          element={
            <DocumentResponseProvider>
              <PageTitle breadcrumbs={salesListBreadcrumbs}>Document</PageTitle>
              <DocumentPrivew />
            </DocumentResponseProvider>
          }
        />
        <Route
          path='/estimate'
          element={
            <>
              <PageTitle breadcrumbs={salesBreadcrumbs}>Devis</PageTitle>
              <DocumentsListWrapper code='DV' type='sales' />
            </>
          }
        />
        <Route
          path='estimate/add'
          element={
            <>
              <PageTitle breadcrumbs={salesListBreadcrumbs}>Creer un devis</PageTitle>
              <DocumentCreateWrapper code='DV' type='sales' />
            </>
          }
        />
        <Route
          path='/order'
          element={
            <>
              <PageTitle breadcrumbs={salesBreadcrumbs}>Commande</PageTitle>
              <DocumentsListWrapper code='CV' type='sales' />
            </>
          }
        />
        <Route
          path='order/add'
          element={
            <>
              <PageTitle breadcrumbs={salesListBreadcrumbs}>Créer commande</PageTitle>
              <DocumentCreateWrapper code='CV' type='sales' />
            </>
          }
        />
        <Route
          path='/delivery-note'
          element={
            <>
              <PageTitle breadcrumbs={salesBreadcrumbs}>Bon de livraison</PageTitle>
              <DocumentsListWrapper code='BL' type='sales' />
            </>
          }
        />
        <Route
          path='delivery-note/add'
          element={
            <>
              <PageTitle breadcrumbs={salesListBreadcrumbs}>Créer bon de livraison</PageTitle>
              <DocumentCreateWrapper code='BL' type='sales' />
            </>
          }
        />
        <Route
          path='/invoice'
          element={
            <>
              <PageTitle breadcrumbs={salesBreadcrumbs}>Facture</PageTitle>
              <DocumentsListWrapper code='FV' type='sales' />
            </>
          }
        />
        <Route
          path='invoice/add'
          element={
            <>
              <PageTitle breadcrumbs={salesListBreadcrumbs}>Créer Facture</PageTitle>
              <DocumentCreateWrapper code='FV' type='sales' />
            </>
          }
        />
        <Route
          path='caisse/order'
          element={
            <>
              <PageTitle breadcrumbs={salesListBreadcrumbs}>Créer Order</PageTitle>
              <CaisseCreateWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/sale/estimate' />} />
    </Routes>
  )
}

export default SalesPage
