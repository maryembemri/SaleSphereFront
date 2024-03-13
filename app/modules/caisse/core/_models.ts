import { Status } from "../../../../_metronic/helpers"
import { Product } from "../../products"

export type Caisse = {
    id: number
    reference: string
    startDate: string
    dueDate: string
    project: any
    productNumber: number
    totalQuantity: number
    totalCost: number

    state: Status

}
export type CaisseItem = {
    id: string
    product: Product
    cost: number
    quantity: number

}

export type CaisseForm = {
    reference: string
    startDate: string
    dueDate: string
    project: any
    productNumber: number
    totalQuantity: number
    totalCost: number
}

export type CaisseFormItem = {
    id: string
    productId: number
    product: Product
    cost: number
    quantity: number

}


export type LogisticCaisse = {
    total: number,
    totalQuantity: number,
    countPending: number,
    countValid: number,
    countLate: number
}