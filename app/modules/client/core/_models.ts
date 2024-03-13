export interface ClientFormData {
    type: 'individual' | 'professional'
    name: string
    isExempt: boolean
    exemptNumber?: string | null
    exemptExpiration?: string | null
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

export type Client = {
    id: number
    type: 'individual' | 'professional'
    reference?: string
    name: string
    isExempt: boolean
    exemptNumber?: string | null
    exemptExpiration?: string | null
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

