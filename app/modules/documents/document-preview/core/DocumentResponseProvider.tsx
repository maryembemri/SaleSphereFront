/* eslint-disable react-hooks/exhaustive-deps */
import {FC, useContext, createContext} from 'react'
import {useQuery} from 'react-query'
import {isNotEmpty, QUERIES, WithChildren} from '../../../../../_metronic/helpers'
import {useParams} from 'react-router-dom'
import {getDocumentById} from '../../core/requests'
import {Document, Item} from '../../core/models'

type DocumentContext = {
  refetch: () => void
  isLoading: boolean
  response?: {document: Document; items: Item[]}
  documentId?: number
}

const DocumentResponseContext = createContext<DocumentContext>({
  refetch: () => {},
  isLoading: false,
  response: undefined,
  documentId: undefined,
})

const DocumentResponseProvider: FC<WithChildren> = ({children}) => {
  const {id} = useParams()
  const enabledQuery: boolean = isNotEmpty(id) && !Number.isNaN(Number(id))

  const {
    isFetching,
    refetch,
    data: response,
  } = useQuery(
    `${QUERIES.DOCUMENT_LIST}-document-${id}`,
    () => {
      return getDocumentById(Number(id))
    },
    {cacheTime: 0, enabled: enabledQuery, keepPreviousData: true, refetchOnWindowFocus: false}
  )

  return (
    <DocumentResponseContext.Provider
      value={{isLoading: isFetching, refetch, response, documentId: Number(id)}}
    >
      {children}
    </DocumentResponseContext.Provider>
  )
}

const useDocumentResponse = () => useContext(DocumentResponseContext)

const useDocumentResponseData = () => {
  const {response} = useDocumentResponse()
  if (!response) {
    return undefined
  }

  return response
}

const useDocumentResponseLoading = (): boolean => {
  const {isLoading} = useDocumentResponse()
  return isLoading
}

export {
  DocumentResponseProvider,
  useDocumentResponse,
  useDocumentResponseData,
  useDocumentResponseLoading,
}
