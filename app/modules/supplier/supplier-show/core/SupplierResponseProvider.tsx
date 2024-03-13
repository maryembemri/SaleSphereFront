/* eslint-disable react-hooks/exhaustive-deps */
import {FC, useContext, createContext} from 'react'
import {useQuery} from 'react-query'
import {isNotEmpty, QUERIES, WithChildren} from '../../../../../_metronic/helpers'
import {useParams} from 'react-router-dom'
import {Supplier} from '../../core/models'
import {getSupplierById} from '../../core/requests'

type SupplierContext = {
  refetch: () => void
  isLoading: boolean
  response?: Supplier
  supplierId?: number
}

const SupplierResponseContext = createContext<SupplierContext>({
  refetch: () => {},
  isLoading: false,
  response: undefined,
  supplierId: undefined,
})
const SupplierResponseProvider: FC<WithChildren> = ({children}) => {
  const {id} = useParams()

  const enabledQuery: boolean = isNotEmpty(id) && !Number.isNaN(Number(id))

  const {
    isFetching,
    refetch,
    data: response,
  } = useQuery(
    `${QUERIES.CLIENT_LIST}-supplier-${id}`,
    () => {
      return getSupplierById(Number(id))
    },
    {cacheTime: 0, enabled: enabledQuery, keepPreviousData: true, refetchOnWindowFocus: false}
  )

  return (
    <SupplierResponseContext.Provider
      value={{isLoading: isFetching, refetch, response, supplierId: Number(id)}}
    >
      {children}
    </SupplierResponseContext.Provider>
  )
}

const useQueryResponse = () => useContext(SupplierResponseContext)

const useSupplierResponseData = () => {
  const {response} = useQueryResponse()
  if (!response) {
    return undefined
  }

  return response
}

const useSupplierResponseLoading = (): boolean => {
  const {isLoading} = useQueryResponse()
  return isLoading
}

export {
  SupplierResponseProvider,
  useQueryResponse,
  useSupplierResponseData,
  useSupplierResponseLoading,
}
