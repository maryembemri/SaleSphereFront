import axios from "axios"
import { Supplier } from "./models"
import { SuppliersQueryResponse } from "../suppliers-list/core/_init"

const API_URL = process.env.REACT_APP_API_URL


const createSupplier = async (formData: any): Promise<void> => {
    try {
        const response = axios.post(`${API_URL}/suppliers`, formData)
        console.log(response)
    } catch (error: any) {
        console.error('Failed to create avatar', error)
        return Promise.reject(error.response.data.message || 'Failed to create supplier')
    }
}
const updateSupplier = async (supplierId: number | undefined, formData: any): Promise<void> => {
    try {
        const response = axios.put(`${API_URL}/suppliers/${supplierId}`, formData)
        console.log(response)
    } catch (error: any) {
        console.error('Failed to create avatar', error)
        return Promise.reject(error.response.data.message || 'Failed to create supplier')
    }
}

const getSupplierById = async (id: number | undefined): Promise<Supplier | undefined> => {
    const response = await axios
        .get(`${API_URL}/suppliers/${id}`)
    return response.data
}


const getSuppliers = async (query: string): Promise<SuppliersQueryResponse> => {
    const response = await axios
        .get(`${API_URL}/suppliers/?${query}`)
    return response.data
}

const getAllSuppliers = async (): Promise<Array<Supplier>> => {
    const response = await axios.get(`${API_URL}/all-suppliers`)
    return response.data
}

const archiveSupplier = async (supplierId: number, isArchived: boolean): Promise<void> => {
    try {
        const response = axios.post(`${API_URL}/suppliers/${supplierId}`, { isArchived })
        console.log(response)
    } catch (error: any) {
        console.error('Failed to archive supplier', error)
        return Promise.reject(error.response.data.message || 'Failed to archive supplier')
    }
}

const exportToExcel = async () => {
    try {
        // Make a GET request to the API endpoint for exporting to Excel
        const response = await axios.get(`${API_URL}/export-suppliers`, {
            responseType: 'blob',  // Set responseType to 'blob' to handle binary data
        });


        // Get the current date and time for the file name
        const now = new Date();
        const formattedDate = now.toISOString().replace(/[-:.TZ]/g, '');

        // Set the file name and path with the current date
        const fileName = `supplier-${formattedDate}.xlsx`;
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


export {
    createSupplier,
    updateSupplier,
    archiveSupplier,
    getAllSuppliers,
    getSuppliers,
    getSupplierById,
    exportToExcel
}