import {ListViewProvider, useListView} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {ProductsListHeader} from './components/header/ProductsListHeader'
import {ProductsTable} from './table/ProductsTable'
import {Card} from '../../../../_metronic/helpers'
import ProductsListNav from './components/nav/ProductsListNav'
import ProductsGrid from './grid/ProductsGrid'

const ProductsList = () => {
  const {displayMode} = useListView()
  return (
    <>
      <ProductsListHeader />

      <ProductsListNav />

      <Card>
        {displayMode === 'grid' && <ProductsGrid />}
        {displayMode === 'list' && <ProductsTable />}
      </Card>
    </>
  )
}

const ProductsListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <ProductsList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {ProductsListWrapper}
