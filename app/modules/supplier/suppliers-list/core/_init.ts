import { Response } from '../../../../../_metronic/helpers'
import { Supplier } from '../../core/models'

export type SuppliersQueryResponse = Response<Array<Supplier>>

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
  items_per_page: 10,
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

