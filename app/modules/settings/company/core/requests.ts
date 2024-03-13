import axios from "axios"
import { Company } from "../_model"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
/* eslint-disable-next-line jsx-a11y/anchor-is-valid */
const API_URL = process.env.REACT_APP_API_URL

const updateCompany = async (companyId: number, formData: Company): Promise<void> => {
    try {
        const response = await axios.put(`${API_URL}/company/${companyId}`, formData)

    } catch (error: any) {
        console.error('Failed to update Company', error)
        return Promise.reject(error.response.data.message || 'Failed to update Company')
    }
}


const getCompany = async (): Promise<Company> => {
    const response = await axios
        .get(`${API_URL}/company`)
    return response.data
}

export { updateCompany, getCompany }
