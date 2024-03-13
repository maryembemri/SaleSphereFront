import axios from 'axios'
import { ID } from '../../../../../_metronic/helpers'
import { User, UserFormData, UsersQueryResponse } from './models'

const API_URL = process.env.REACT_APP_API_URL
const USERS_URL = `${API_URL}/users`

const getUsers = async (query: string): Promise<UsersQueryResponse> => {
    const response = await axios
        .get(`${USERS_URL}?${query}`)
    return response.data
}

const getUserById = async (id: ID): Promise<User | undefined> => {
    const response = await axios
        .get(`${USERS_URL}/${id}`)
    return response.data

}

const createUser = async (user: UserFormData): Promise<User | undefined> => {
    const response = await axios
        .post(USERS_URL, user)

    return response.data
}

const updateUser = async (id: number, user: UserFormData): Promise<User | undefined> => {
    const response = await axios
        .put(`${USERS_URL}/${id}`, user)

    return response.data
}

const deleteUser = async (userId: ID): Promise<void> => {
    await axios.delete(`${USERS_URL}/${userId}`)
}

const deleteSelectedUsers = async (userIds: Array<ID>): Promise<void> => {
    const requests = userIds.map((id) => axios.delete(`${USERS_URL}/${id}`))
    await axios.all(requests)
}

export { getUsers, deleteUser, deleteSelectedUsers, getUserById, createUser, updateUser }
