export type Company = {
    id: number
    logo?: string
    name: string
    taxId: string
    currency: string
    email: string
    mobile: string
    phone: string
    address: string
}


export const company: Company = {
    id: 0,
    name: '',
    taxId: '',
    currency: 'TND',
    email: '',
    mobile: '',
    phone: '',
    address: ''
}