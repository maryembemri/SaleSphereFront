import {lazy, FC, Suspense} from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
import {getCSSVariableValue} from '../../_metronic/assets/ts/_utils'
import {WithChildren} from '../../_metronic/helpers'
import BuilderPageWrapper from '../pages/layout-builder/BuilderPageWrapper'

const PrivateRoutes = () => {
  const SalesPage = lazy(() => import('../pages/SalesPage'))
  const PurchasesPage = lazy(() => import('../pages/PurchasesPage'))
  const ClientsPage = lazy(() => import('../pages/ClientsPage'))
  const SuppliersPage = lazy(() => import('../pages/SuppliersPage'))
  const ProductsPage = lazy(() => import('../pages/ProductsPage'))
  const StockPage = lazy(() => import('../pages/StockPage'))
  const SettingsPage = lazy(() => import('../pages/SettingsPage'))

  // -----
  const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))
  const AccountPage = lazy(() => import('../modules/accounts/AccountPage'))
  const ChatPage = lazy(() => import('../modules/apps/chat/ChatPage'))
  const UsersPage = lazy(() => import('../modules/apps/user-management/UsersPage'))

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path='auth/*' element={<Navigate to='/dashboard' />} />
        {/* Pages */}
        <Route path='dashboard' element={<DashboardWrapper />} />

        <Route
          path='/sale/*'
          element={
            <SuspensedView>
              <SalesPage />
            </SuspensedView>
          }
        />

        <Route
          path='/purchase/*'
          element={
            <SuspensedView>
              <PurchasesPage />
            </SuspensedView>
          }
        />

        <Route
          path='/client/*'
          element={
            <SuspensedView>
              <ClientsPage />
            </SuspensedView>
          }
        />

        <Route
          path='/suppliers/*'
          element={
            <SuspensedView>
              <SuppliersPage />
            </SuspensedView>
          }
        />

        <Route
          path='/product/*'
          element={
            <SuspensedView>
              <ProductsPage />
            </SuspensedView>
          }
        />

        <Route
          path='/stock/*'
          element={
            <SuspensedView>
              <StockPage />
            </SuspensedView>
          }
        />

        <Route
          path='settings/*'
          element={
            <SuspensedView>
              <SettingsPage />
            </SuspensedView>
          }
        />

        {/* ************************ */}

        <Route path='builder' element={<BuilderPageWrapper />} />

        {/* Lazy Modules */}
        <Route
          path='crafted/pages/profile/*'
          element={
            <SuspensedView>
              <ProfilePage />
            </SuspensedView>
          }
        />

        <Route
          path='crafted/account/*'
          element={
            <SuspensedView>
              <AccountPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/chat/*'
          element={
            <SuspensedView>
              <ChatPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/user-management/*'
          element={
            <SuspensedView>
              <UsersPage />
            </SuspensedView>
          }
        />
        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  )
}

const SuspensedView: FC<WithChildren> = ({children}) => {
  const baseColor = getCSSVariableValue('--bs-primary')
  TopBarProgress.config({
    barColors: {
      '0': baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}

export {PrivateRoutes}
