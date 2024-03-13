/* eslint-disable react-hooks/exhaustive-deps */
import {FC, useContext, createContext} from 'react'
import {useQuery} from 'react-query'
import {isNotEmpty, QUERIES, WithChildren} from '../../../../../_metronic/helpers'
import {useParams} from 'react-router-dom'
import {Product} from '../../core/models'
import {getProductById} from '../../core/requests'

type ProductContext = {
  refetch: () => void
  isLoading: boolean
  response?: Product
  productId?: number
}

const ProductResponseContext = createContext<ProductContext>({
  refetch: () => {},
  isLoading: false,
  response: undefined,
  productId: undefined,
})
const ProductResponseProvider: FC<WithChildren> = ({children}) => {
  const {id} = useParams()

  const enabledQuery: boolean = isNotEmpty(id) && !Number.isNaN(Number(id))

  const {
    isFetching,
    refetch,
    data: response,
  } = useQuery(
    `${QUERIES.PRODUCT_LIST}-product-${id}`,
    () => {
      return getProductById(Number(id))
    },
    {cacheTime: 0, enabled: enabledQuery, keepPreviousData: true, refetchOnWindowFocus: false}
  )

  return (
    <ProductResponseContext.Provider
      value={{isLoading: isFetching, refetch, response, productId: Number(id)}}
    >
      {children}
    </ProductResponseContext.Provider>
  )
}

const useProductResponse = () => useContext(ProductResponseContext)

const useProductResponseData = () => {
  const {response} = useProductResponse()
  if (!response) {
    return undefined
  }

  return response
}

const useProductResponseLoading = (): boolean => {
  const {isLoading} = useProductResponse()
  return isLoading
}

export {
  ProductResponseProvider,
  useProductResponse,
  useProductResponseData,
  useProductResponseLoading,
}
