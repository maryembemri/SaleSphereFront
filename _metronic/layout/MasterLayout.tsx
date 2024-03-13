import {useEffect} from 'react'
import {Outlet, useLocation} from 'react-router-dom'
import {HeaderWrapper} from './components/header'
import {RightToolbar} from '../partials/layout/RightToolbar'
import {ScrollTop} from './components/scroll-top'
import {Content} from './components/content'
import {FooterWrapper} from './components/footer'
import {Sidebar} from './components/sidebar'
import {ActivityDrawer, DrawerMessenger, InviteUsers, UpgradePlan} from '../partials'
import {PageDataProvider} from './core'
import {reInitMenu} from '../helpers'
import CreateProductModal from '../../app/modules/products/product-create/modals/CreateProductModal'

const MasterLayout = () => {
  const location = useLocation()
  useEffect(() => {
    reInitMenu()
  }, [location.key])

  return (
    <PageDataProvider>
      <div className='d-flex flex-column flex-root app-root' id='app_root'>
        <div className='app-page flex-column flex-column-fluid' id='app_page'>
          <HeaderWrapper />
          <div className='app-wrapper flex-column flex-row-fluid' id='app_wrapper'>
            <Sidebar />
            <div className='app-main flex-column flex-row-fluid' id='app_main'>
              <div className='d-flex flex-column flex-column-fluid'>
                {/* <ToolbarWrapper /> */}
                <Content>
                  <Outlet />
                </Content>
              </div>
              <FooterWrapper />
            </div>
          </div>
        </div>
      </div>

      <CreateProductModal />

      {/* begin:: Drawers */}
      <ActivityDrawer />
      <RightToolbar />
      <DrawerMessenger />
      {/* end:: Drawers */}

      {/* begin:: Modals */}
      <InviteUsers />
      <UpgradePlan />
      {/* end:: Modals */}
      <ScrollTop />
    </PageDataProvider>
  )
}

export {MasterLayout}
