import {ListViewProvider} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import LogisticInformations from './components/header/LogisticInformations'
import {Card} from 'react-bootstrap'
import {StockMovementsTable} from './table/StockMovementsTable'
import {FC} from 'react'
import {useProductResponseData} from '../core/ProductResponseProvider'

const StockMovement = () => {
  return (
    <>
      <LogisticInformations />

      <Card>
        <StockMovementsTable />
      </Card>
    </>
  )
}

const StockMovementWrapper: FC = () => {
  const product = useProductResponseData()
  const productId = product?.id
  return (
    <QueryRequestProvider>
      <QueryResponseProvider productId={productId}>
        <ListViewProvider>
          <StockMovement />
        </ListViewProvider>
      </QueryResponseProvider>
    </QueryRequestProvider>
  )
}

export {StockMovementWrapper}
