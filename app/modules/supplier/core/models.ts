export interface SupplierFormData {
    type: 'individual' | 'professional'
    name: string
    taxNumber?: string | null
    register?: string
    website?: string
    email?: string
    mobile?: string
    phone?: string
    address?: string
    city?: string
    postalCode?: string
    country?: string
}

export type Supplier = {
    id: number
    type: 'individual' | 'professional'
    reference?: string
    name: string
    taxNumber?: string | null
    register?: string
    website?: string
    email?: string
    mobile?: string
    phone?: string
    address?: string
    city?: string
    postalCode?: string
    country?: string
    revenue: number
    isArchived: boolean
    createdAt: string;
    updatedAt: string;

}