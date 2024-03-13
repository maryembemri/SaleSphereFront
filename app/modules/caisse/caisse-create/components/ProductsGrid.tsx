import CustomProductCard from './CustomProductCard'

import {useMemo} from 'react'
import {Product} from '../../../products'
import {useQueryRequest} from '../core/QueryRequestProvider'
import {
  useQueryResponseData,
  useQueryResponseLoading,
  useQueryResponsePagination,
} from '../core/QueryResponseProvider'
import {ProductsListHeader} from './header/ProductsListHeader'
import {Card} from '../../../../../_metronic/helpers'

const ProductsGrid = () => {
  const {updateState, state} = useQueryRequest()
  const products = useQueryResponseData()
  const isLoading = useQueryResponseLoading()
  const pagination = useQueryResponsePagination()

  const data = useMemo(() => products, [products])

  return (
    <Card>
      <ProductsListHeader />

      <div className='card-body overflow-auto min-h-400px mh-400px p-4 m-4 border border-1 rounded'>
        <div className=''>
          {data.length > 0 ? (
            <div className='d-flex flex-column mb-5'>
              <div className='pb-4 row g-3 g-xl-6'>
                {data.map((item: Product, i) => {
                  return <CustomProductCard key={i} product={item} />
                })}
              </div>
              {pagination.links && pagination.links.length > 3 && (
                <button
                  type='button'
                  disabled={isLoading}
                  className='btn btn-sm btn-secondary w-25 mx-auto fw-semibold fs-5'
                  onClick={() => updateState({...state, items_per_page: state.items_per_page + 20})}
                >
                  {isLoading ? 'Charegement...' : 'Afficher plus'}
                </button>
              )}
            </div>
          ) : (
            <div className='d-flex text-center text-gray-600 fw-bold fs-6 w-100 align-content-center justify-content-center'>
              Aucun enregistrement correspondant n'a été trouvé
            </div>
          )}
        </div>
      </div>
    </Card>
  )
}

export default ProductsGrid
