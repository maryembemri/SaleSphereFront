/* eslint-disable react-hooks/exhaustive-deps */
import {FC, useContext, createContext} from 'react'
import {useQuery} from 'react-query'
import {isNotEmpty, QUERIES, WithChildren} from '../../../../../_metronic/helpers'
import {useParams} from 'react-router-dom'
import {Client} from '../../core/_models'
import {getClientById} from '../../core/_requests'

type ClientContext = {
  refetch: () => void
  isLoading: boolean
  response?: Client
  clientId?: number
}

const ClientResponseContext = createContext<ClientContext>({
  refetch: () => {},
  isLoading: false,
  response: undefined,
  clientId: undefined,
})
const ClientResponseProvider: FC<WithChildren> = ({children}) => {
  const {id} = useParams()

  const enabledQuery: boolean = isNotEmpty(id) && !Number.isNaN(Number(id))

  const {
    isFetching,
    refetch,
    data: response,
  } = useQuery(
    `${QUERIES.CLIENT_LIST}-client-${id}`,
    () => {
      return getClientById(Number(id))
    },
    {cacheTime: 0, enabled: enabledQuery, keepPreviousData: true, refetchOnWindowFocus: false}
  )

  return (
    <ClientResponseContext.Provider
      value={{isLoading: isFetching, refetch, response, clientId: Number(id)}}
    >
      {children}
    </ClientResponseContext.Provider>
  )
}

const useQueryResponse = () => useContext(ClientResponseContext)

const useClientResponseData = () => {
  const {response} = useQueryResponse()
  if (!response) {
    return undefined
  }

  return response
}

const useClientResponseLoading = (): boolean => {
  const {isLoading} = useQueryResponse()
  return isLoading
}

export {ClientResponseProvider, useQueryResponse, useClientResponseData, useClientResponseLoading}
