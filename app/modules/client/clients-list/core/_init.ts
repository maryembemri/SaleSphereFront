import { Client } from '../../core/_models'
import { Response } from '../../../../../_metronic/helpers'

export type ClientsQueryResponse = Response<Array<Client>>

export type QueryState = {
  page: number
  items_per_page: number
  sort?: string
  order?: 'asc' | 'desc'
  filter?: any
  search?: string
  archived?: boolean
}

export const initialQueryState: QueryState = {
  page: 1,
  items_per_page: 20,
  archived: false,
}

export type QueryRequestContextProps = {
  state: QueryState
  updateState: (updates: Partial<QueryState>) => void
}

export const initialQueryRequest: QueryRequestContextProps = {
  state: initialQueryState,
  updateState: () => { },
}