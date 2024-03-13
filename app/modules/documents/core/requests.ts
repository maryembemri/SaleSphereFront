import axios from "axios"
import { DocumentHeader, DocumentItem, FormItem, Document, Item } from "./models"
import { DocumentsQueryResponse } from "../documents-list/core/_init"
import { DocumentCodeStatus } from "../../../../_metronic/helpers"

const API_URL = process.env.REACT_APP_API_URL

const createDocument = async (documentHeader: DocumentHeader, items: DocumentItem[]): Promise<{ document: any, items: FormItem[] } | undefined> => {
    try {
        console.log(documentHeader)
        const response = await axios.post(`${API_URL}/document`, { document: documentHeader, items })
        return response.data

    } catch (error: any) {
        console.error('Failed to initilize document', error)
        return Promise.reject(error.response.data.message || 'Failed to initilize document')
    }
}

const getDocumentById = async (id: number | undefined): Promise<{ document: Document, items: Item[] } | undefined> => {
    const response = await axios
        .get(`${API_URL}/documents/${id}`)
    return response.data
}

const updateDocumentStatus = async (id: number | undefined, code: DocumentCodeStatus) => {
    const response = await axios
        .put(`${API_URL}/document/${id}/${code}`)
    return response.data
}

const getDocuments = async (query: string): Promise<DocumentsQueryResponse> => {
    const response = await axios
        .get(`${API_URL}/documents?${query}`)
    return response.data
}

const getLogistics = async (code?: string): Promise<{ totalSubtotal?: number, totalTotal?: number }> => {
    console.log(code)
    const response = await axios
        .get(`${API_URL}/document-logistics?code=${code}`,)
    return response.data
}


export { createDocument, getDocumentById, updateDocumentStatus, getDocuments, getLogistics }