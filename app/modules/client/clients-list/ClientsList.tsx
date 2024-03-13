import {ListViewProvider, useListView} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {ClientsListHeader} from './components/header/ClientsListHeader'
import {ClientsTable} from './table/ClientsTable'
import {Card} from '../../../../_metronic/helpers'
import ClientsListNav from './components/nav/ClientsListNav'
import ClientsGrid from './grid/ClientsGrid'

const ClientsList = () => {
  const {displayMode} = useListView()
  return (
    <>
      <ClientsListHeader />

      <ClientsListNav />

      <Card>
        {displayMode === 'grid' && <ClientsGrid />}
        {displayMode === 'list' && <ClientsTable />}
      </Card>
    </>
  )
}

const ClientsListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <ClientsList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {ClientsListWrapper}
