import { Response } from '../../../../../_metronic/helpers'

export type User = {
    id: number
    name: string
    email: string
    position: string
    createdAt: string
    updatedAt: string
    permissions: string[]
}


export type UserFormData = {
    name: string
    email: string
    position: string
    password: string
    confirmPassword: string
    permissions: string[]
}

const initValues: UserFormData = {
    name: '',
    email: '',
    position: '',
    password: '',
    confirmPassword: '',
    permissions: []
}

export type UsersQueryResponse = Response<Array<User>>


export { initValues }