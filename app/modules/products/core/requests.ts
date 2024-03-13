import axios from "axios"
import { ProductsQueryResponse } from "../products-list/core/_init"
import { Closure, Color, Fabric, Product, Sleeve } from "./models"
import { Category, Vat } from "../../../../_metronic/helpers"

const API_URL = process.env.REACT_APP_API_URL
const PRODUCT_URL = `${API_URL}/products`

const createProduct = async (formData: any): Promise<void> => {
    try {
        const response = axios.post(`${API_URL}/products`, formData)
        console.log(response)
    } catch (error: any) {
        console.error('Failed to create avatar', error)
        return Promise.reject(error.response.data.message || 'Failed to create product')
    }
}
const updateProduct = async (productId: number, formData: any): Promise<void> => {
    try {
        const response = axios.put(`${API_URL}/products/${productId}`, formData)
        console.log(response)
    } catch (error: any) {
        console.error('Failed to create avatar', error)
        return Promise.reject(error.response.data.message || 'Failed to create product')
    }
}


const getProducts = async (query: string): Promise<ProductsQueryResponse> => {
    const response = await axios
        .get(`${PRODUCT_URL}?${query}`)
    console.log(response.data)
    return response.data
}

const getAllProducts = async (): Promise<Product[] | undefined> => {
    const response = await axios
        .get(`${API_URL}/all-products`)
    return response.data
}


const getProductById = async (id: number | undefined): Promise<Product | undefined> => {
    const response = await axios
        .get(`${PRODUCT_URL}/${id}`)
    return response.data
}


const archiveProduct = async (productId: number, isArchived: boolean): Promise<void> => {
    try {
        const response = axios.post(`${PRODUCT_URL}/${productId}`, { isArchived })
        console.log(response)
    } catch (error: any) {
        console.error('Failed to archive product', error)
        return Promise.reject(error.response.data.message || 'Failed to archive product')
    }
}

const exportToExcel = async () => {
    try {
        // Make a GET request to the API endpoint for exporting to Excel
        const response = await axios.get(`${API_URL}/export-products`, {
            responseType: 'blob',  // Set responseType to 'blob' to handle binary data
        });

        // Create a link element to trigger the file download
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'products.xlsx');
        document.body.appendChild(link);
        link.click();

        // Cleanup
        document.body.removeChild(link);
    } catch (error) {
        console.error('Error exporting to Excel:', error);
    }
};


const getAllCategories = async (): Promise<Array<Category>> => {
    const response = await axios.get(`${API_URL}/categories`)
    return response.data
}
const getAllColors = async (): Promise<Array<Color>> => {
    const response = await axios.get(`${API_URL}/colors`)
    return response.data
}

const getAllFabrics = async (): Promise<Array<Fabric>> => {
    const response = await axios.get(`${API_URL}/fabrics`)
    return response.data
}

const getAllSleeves = async (): Promise<Array<Sleeve>> => {
    const response = await axios.get(`${API_URL}/sleeves`)
    return response.data
}

const getAllClosures = async (): Promise<Array<Closure>> => {
    const response = await axios.get(`${API_URL}/closures`)
    return response.data
}
const getAllVats = async (): Promise<Array<Vat>> => {
    const response = await axios.get(`${API_URL}/vats`)
    return response.data
}


export {
    createProduct,
    updateProduct,
    archiveProduct,
    getAllProducts,
    getProducts,
    getProductById,
    exportToExcel,
    getAllCategories,
    getAllColors,
    getAllFabrics,
    getAllSleeves,
    getAllClosures,
    getAllVats
}
