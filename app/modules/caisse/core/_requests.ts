import axios from "axios"
import { LogisticCaisse, Caisse, CaisseForm, CaisseFormItem, CaisseItem } from "./_models"
import { Status } from "../../../../_metronic/helpers"

const API_URL = process.env.REACT_APP_API_URL

const createCaisse = async (caisseHeader: CaisseForm, items: CaisseFormItem[]): Promise<{ caisse: any, items: CaisseItem[] } | undefined> => {
    try {
        console.log(caisseHeader)
        const response = await axios.post(`${API_URL}/caisse`, { caisse: caisseHeader, items })
        return response.data

    } catch (error: any) {
        console.error('Failed to initilize caisse', error)
        return Promise.reject(error.response.data.message || 'Failed to initilize caisse')
    }
}

const getCaisseById = async (id: number | undefined): Promise<{ caisse: Caisse, items: CaisseItem[] } | undefined> => {
    const response = await axios
        .get(`${API_URL}/caisses/${id}`)
    return response.data
}

// const updateCaisseStatus = async (id: number | undefined, code: CaisseCodeStatus) => {
//     const response = await axios
//         .put(`${API_URL}/caisse/${id}/${code}`)
//     return response.data
// }

// const getCaisses = async (query: string): Promise<CaissesQueryResponse> => {
//     const response = await axios
//         .get(`${API_URL}/caisses?${query}`)
//     return response.data
// }

const getLogistics = async (): Promise<LogisticCaisse> => {
    const response = await axios
        .get(`${API_URL}/caisse-logistics`,)
    return response.data
}


// to move

const getAllStatuses = async (): Promise<Array<Status>> => {
    const response = await axios.get(`${API_URL}/statuses`)
    return response.data
}



export { createCaisse, getCaisseById, getLogistics, getAllStatuses }