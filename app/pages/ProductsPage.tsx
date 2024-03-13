import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../_metronic/layout/core'
import {ProductsListWrapper} from '../modules/products/products-list/ProductsList'
import Information from '../modules/products/product-show/components/Information'
import {ProductShowHeader} from '../modules/products/product-show/ProductShowHeader'
import {ProductResponseProvider} from '../modules/products/product-show/core/ProductResponseProvider'
import ProductCreate from '../modules/products/product-create/ProductCreate'
import {StockMovementWrapper} from '../modules/products/product-show/stock-movement/StockMovement'

const productsBreadcrumbs: Array<PageLink> = [
  {
    title: 'Produit',
    path: '/product',
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

const productsListBreadcrumbs: Array<PageLink> = [
  {
    title: 'Produit',
    path: '/product',
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
    title: 'Liste des Produits',
    path: '/product/list',
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

const ProductsPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='/list'
          element={
            <>
              <PageTitle breadcrumbs={productsBreadcrumbs}>Liste des Produits</PageTitle>
              <ProductsListWrapper />
            </>
          }
        />
        <Route
          path='/list/add'
          element={
            <>
              <PageTitle breadcrumbs={productsListBreadcrumbs}>Ajouter Produit</PageTitle>
              <ProductCreate />
            </>
          }
        />
        <Route
          path='/list/edit/:id'
          element={
            <>
              <PageTitle breadcrumbs={productsListBreadcrumbs}>Modifier Produit</PageTitle>
              <ProductCreate />
            </>
          }
        />
        <Route
          path='/list/show/:id'
          element={
            <ProductResponseProvider>
              <ProductShowHeader />
              <Outlet />
            </ProductResponseProvider>
          }
        >
          <Route
            path='informations'
            element={
              <>
                <PageTitle breadcrumbs={productsListBreadcrumbs}>Détails produit</PageTitle>
                <Information />
              </>
            }
          />
          <Route
            path='stock'
            element={
              <>
                <PageTitle breadcrumbs={productsListBreadcrumbs}>Stock</PageTitle>
                <StockMovementWrapper />
              </>
            }
          />
          <Route index element={<Navigate to='/product/show/:id/informations' />} />
        </Route>
      </Route>
      <Route index element={<Navigate to='/product/list' />} />
    </Routes>
  )
}

export default ProductsPage
