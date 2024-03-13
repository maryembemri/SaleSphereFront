import { Status } from "../../../../_metronic/helpers"
import { Client } from "../../client"
import { Product } from "../../products"
import { Supplier } from "../../supplier"

export type CodeDocument = 'DV' | 'CV' | 'BL' | 'FV' | 'CA' | 'BR' | 'FA'
export type ModuleDocument = 'sales' | 'purchases'

// create document
export type FormData = {
    id?: number
    subtotal?: number
    tax?: number
    discount?: number
    total?: number
    date?: string
    reference?: string
    code?: CodeDocument
    client?: Client
    supplier?: Supplier
    type?: ModuleDocument
    note?: string
    stamp?: number
}

export type FormItem = {
    id: string
    product?: Product
    description: string
    price: number
    discount: number
    quantity: number
    tax: number
}

export type DocumentHeader = {
    code?: CodeDocument
    type?: ModuleDocument
    reference: string
    date: string
    tax: number
    discount: number
    subtotal: number
    total: number
    note?: string
    stamp?: number
    clientId?: number
    supplierId?: number
    isArchived?: boolean
}

export type DocumentItem = {
    productId?: number
    description: string
    price: number
    discount: number
    quantity: number
    tax: number
}

export type Document = {
    id: number
    reference: string
    code: CodeDocument
    type: ModuleDocument
    date: string
    subtotal: number
    tax: number
    discount: number
    total: number
    note: string
    stamp: number
    createdAt: string
    updatedAt: string
    client?: Client
    supplier?: Supplier
    status: Status
}


export type Item = {
    id: number
    description?: string
    quantity: number
    price: number
    discount: number
    tax: number
    createdAt: string
    updatedAt: string
    documentId: number
    product?: Product
}


