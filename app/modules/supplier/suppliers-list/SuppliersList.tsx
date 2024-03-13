import {ListViewProvider, useListView} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {SuppliersListHeader} from './components/header/SuppliersListHeader'
import {SuppliersTable} from './table/SuppliersTable'
import {Card} from '../../../../_metronic/helpers'
import SuppliersListNav from './components/nav/SuppliersListNav'
import SuppliersGrid from './grid/SupplierGrid'

const SuppliersList = () => {
  const {displayMode} = useListView()
  return (
    <>
      <SuppliersListHeader />

      <SuppliersListNav />

      <Card>
        {displayMode === 'grid' && <SuppliersGrid />}
        {displayMode === 'list' && <SuppliersTable />}
      </Card>
    </>
  )
}

const SuppliersListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <SuppliersList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {SuppliersListWrapper}
