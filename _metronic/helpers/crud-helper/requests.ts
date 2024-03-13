import axios from "axios"
import { Status } from "../models/Status"
import { Category } from "../models/Category"
import { Unit } from "../models/Unit"

const API_URL = process.env.REACT_APP_API_URL

const getAllStatuses = async (): Promise<Array<Status>> => {
    const response = await axios.get(`${API_URL}/statuses`)
    return response.data
}

const getAllCategories = async (): Promise<Array<Category>> => {
    const response = await axios.get(`${API_URL}/categories`)
    return response.data

}
const getAllUnits = async (): Promise<Array<Unit>> => {
    const response = await axios.get(`${API_URL}/units`)
    return response.data
}

export { getAllStatuses, getAllCategories, getAllUnits }