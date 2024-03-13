import {useMemo} from 'react'
import CustomProductCard from './card/CustomProductCard'
import {useQueryResponseData, useQueryResponseLoading} from '../core/QueryResponseProvider'
import {ProductsListPagination} from '../components/pagination/ProductsListPagination'
import {Product} from '../../core/models'
import {Loading} from '../../../../../_metronic/helpers'

const ProductsGrid = () => {
  const products = useQueryResponseData()
  const isLoading = useQueryResponseLoading()

  const data = useMemo(() => products, [products])

  return (
    <div className='card-body '>
      <div className='py-8 row g-3 g-xl-6'>
        {data.length > 0 ? (
          data.map((item: Product, i) => {
            return <CustomProductCard key={i} product={item} />
          })
        ) : (
          <div className='d-flex text-center text-gray-600 fw-bold fs-6 w-100 align-content-center justify-content-center'>
            Aucun enregistrement correspondant n'a été trouvé
          </div>
        )}
      </div>
      <ProductsListPagination />

      {isLoading && <Loading />}
    </div>
  )
}

export default ProductsGrid
