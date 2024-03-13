import {FC, useState, createContext, useContext, useEffect} from 'react'
import {WithChildren} from '../.././../../../_metronic/helpers'
import {QueryRequestContextProps, QueryState, initialQueryRequest} from './_init'
import {CodeDocument, ModuleDocument} from '../../core/models'

const QueryRequestContext = createContext<QueryRequestContextProps>(initialQueryRequest)

const QueryRequestProvider: FC<WithChildren & {code: CodeDocument; type: ModuleDocument}> = ({
  children,
  code,
  type,
}) => {
  const [state, setState] = useState<QueryState>({code, ...initialQueryRequest.state})
  useEffect(() => {
    setState({...state, code, type} as QueryState)
  }, [code, type])

  const updateState = (updates: Partial<QueryState>) => {
    const updatedState = {...state, ...updates} as QueryState
    setState(updatedState)
  }

  return (
    <QueryRequestContext.Provider value={{state, updateState}}>
      {children}
    </QueryRequestContext.Provider>
  )
}

const useQueryRequest = () => useContext(QueryRequestContext)
export {QueryRequestProvider, useQueryRequest}
