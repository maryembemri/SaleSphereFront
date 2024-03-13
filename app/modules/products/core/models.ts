import { Category, Unit, Vat } from "../../../../_metronic/helpers"

export type Product = {
    id: number
    code: string
    label: string
    description?: string
    price: number,
    quantity: number
    category: Category
    unit: Unit
    color?: Color
    vat?: Vat
    minStock: number
    maxStock: number
    allowManufactureEmpty: boolean
    isArchived: boolean
    createdAt: string
    updatedAt: string
}

export type ProductFormData = {
    code: string
    label: string
    description?: string
    price?: number
    minStock?: number
    maxStock?: number
    category: number
    unit: number
    color?: number
    vat?: number
    allowManufactureEmpty: boolean
}

const initValues: ProductFormData = {
    code: "",
    label: "",
    category: 0,
    unit: 0,
    allowManufactureEmpty: false
}

export type Color = {
    id: number,
    label: string,
    hexCode: string

}

interface CommonAttributes {
    id: number;
    label: string;
    color?: Color
}

export type Fabric = CommonAttributes;
export type Closure = CommonAttributes;
export type Sleeve = CommonAttributes;

export { initValues }










