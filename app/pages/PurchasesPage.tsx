import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../_metronic/layout/core'
import DocumentCreate from '../modules/documents/document-create/DocumentCreate'
import {DocumentsListWrapper} from '../modules/documents/documents-list/DocumentsList'
import {DocumentPrivew} from '../modules/documents/document-preview/DocumentPrivew'
import {DocumentFormProvider} from '../modules/documents/document-create/core/DocumentFormProvider'
import {DocumentResponseProvider} from '../modules/documents/document-preview/core/DocumentResponseProvider'

const purchasesBreadcrumbs: Array<PageLink> = [
  {
    title: 'Achat',
    path: '/purchase',
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

const purchasesListBreadcrumbs: Array<PageLink> = [
  {
    title: 'Achat',
    path: '/purchase',
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
    title: 'Liste Documents',
    path: '/purchase/list',
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

const PurchasePage = () => {
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
              <PageTitle breadcrumbs={purchasesBreadcrumbs}>Document</PageTitle>
              <DocumentPrivew />
            </DocumentResponseProvider>
          }
        />
        <Route
          path='/supplier-order'
          element={
            <>
              <PageTitle breadcrumbs={purchasesBreadcrumbs}>Devis</PageTitle>
              <DocumentsListWrapper code='CA' type='purchases' />
            </>
          }
        />
        <Route
          path='supplier-order/add'
          element={
            <>
              <PageTitle breadcrumbs={purchasesListBreadcrumbs}>Commande Fournisseur</PageTitle>

              <DocumentCreate code='CA' type='purchases' />
            </>
          }
        />

        <Route
          path='/supplier-deliverynote'
          element={
            <>
              <PageTitle breadcrumbs={purchasesBreadcrumbs}>Bon de Livraison</PageTitle>
              <DocumentsListWrapper code='BR' type='purchases' />
            </>
          }
        />
        <Route
          path='supplier-deliverynote/add'
          element={
            <>
              <PageTitle breadcrumbs={purchasesListBreadcrumbs}>Créer bon de livraison</PageTitle>
              <DocumentCreate code='BR' type='purchases' />
            </>
          }
        />

        <Route
          path='/supplier-invoice'
          element={
            <>
              <PageTitle breadcrumbs={purchasesBreadcrumbs}>Facture</PageTitle>
              <DocumentsListWrapper code='FA' type='purchases' />
            </>
          }
        />
        <Route
          path='supplier-invoice/add'
          element={
            <>
              <PageTitle breadcrumbs={purchasesListBreadcrumbs}>Créer Facture</PageTitle>
              <DocumentCreate code='FA' type='purchases' />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/purchase/order' />} />
    </Routes>
  )
}

export default PurchasePage
