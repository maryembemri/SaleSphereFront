import { Response } from "../../../../../../_metronic/helpers"
import { Document, DocumentItem } from "../../../../documents/core/models"

export type StockMovement = {
    document: Document
    item: DocumentItem
}

export type StockMovementsQueryResponse = Response<Array<StockMovement>>

export type QueryState = {
    page: number
    items_per_page: number
    sort?: string
    order?: 'asc' | 'desc'
    filter?: any
}


export type QueryRequestContextProps = {
    state: QueryState
    updateState: (updates: Partial<QueryState>) => void
}

const initialQueryState: QueryState = {
    page: 1,
    items_per_page: 10,
}

const initialQueryRequest: QueryRequestContextProps = {
    state: initialQueryState,
    updateState: () => { },
}


export { initialQueryState, initialQueryRequest }

