import { CodeDocument, ModuleDocument } from "../../core/models"
import { Response } from "../../../../../_metronic/helpers"
import { Document } from "../../core/models"

export type DocumentsQueryResponse = Response<Array<Document>>

export type QueryState = {
    page: number
    items_per_page: number
    sort?: string
    order?: 'asc' | 'desc'
    code?: CodeDocument
    type?: ModuleDocument
    filter?: any
    search?: string
    archived?: boolean
}


export type QueryRequestContextProps = {
    state: QueryState
    updateState: (updates: Partial<QueryState>) => void
}

const initialQueryState: QueryState = {
    page: 1,
    items_per_page: 10,
    archived: false,

}

const initialQueryRequest: QueryRequestContextProps = {
    state: initialQueryState,
    updateState: () => { },
}


export { initialQueryState, initialQueryRequest }

