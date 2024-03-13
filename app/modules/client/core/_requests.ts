import axios from "axios"
import { Client } from "./_models"
import { ClientsQueryResponse } from "../clients-list/core/_init"


const API_URL = process.env.REACT_APP_API_URL
const CLIENT_URL = `${API_URL}/clients`


const createClient = async (formData: any): Promise<void> => {
    try {
        const response = axios.post(`${API_URL}/clients`, formData)
        console.log(response)
    } catch (error: any) {
        console.error('Failed to create avatar', error)
        return Promise.reject(error.response.data.message || 'Failed to create client')
    }
}
const updateClient = async (clientId: number, formData: any): Promise<void> => {
    try {
        const response = axios.put(`${API_URL}/clients/${clientId}`, formData)
        console.log(response)
    } catch (error: any) {
        console.error('Failed to create avatar', error)
        return Promise.reject(error.response.data.message || 'Failed to create client')
    }
}


const getClients = async (query: string): Promise<ClientsQueryResponse> => {
    const response = await axios
        .get(`${CLIENT_URL}?${query}`)
    return response.data
}


const getClientById = async (id: number | undefined): Promise<Client | undefined> => {
    const response = await axios
        .get(`${CLIENT_URL}/${id}`)
    return response.data
}

const archiveClient = async (clientId: number, isArchived: boolean): Promise<void> => {
    try {
        const response = axios.post(`${CLIENT_URL}/${clientId}`, { isArchived })
        console.log(response)
    } catch (error: any) {
        console.error('Failed to archive client', error)
        return Promise.reject(error.response.data.message || 'Failed to archive client')
    }
}

const exportToExcel = async () => {
    try {
        // Make a GET request to the API endpoint for exporting to Excel
        const response = await axios.get(`${API_URL}/export-clients`, {
            responseType: 'blob',  // Set responseType to 'blob' to handle binary data
        });


        // Get the current date and time for the file name
        const now = new Date();
        const formattedDate = now.toISOString().replace(/[-:.TZ]/g, '');

        // Set the file name and path with the current date
        const fileName = `client-${formattedDate}.xlsx`;
        // Create a link element to trigger the file download
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');

        link.href = url;
        link.setAttribute('download', fileName);
        document.body.appendChild(link);
        link.click();

        // Cleanup
        document.body.removeChild(link);
    } catch (error) {
        console.error('Error exporting to Excel:', error);
    }
};


const getAllClients = async (): Promise<Array<Client>> => {
    const response = await axios.get(`${API_URL}/all-clients`)
    return response.data
}

export {
    createClient,
    updateClient, archiveClient, getClients, getClientById, exportToExcel, getAllClients
}