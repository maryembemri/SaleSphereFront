import axios from "axios"
import { SalesDashobard, TopProductSoldData, TopClientData, TotalsPerMonthDashboard } from "./models"

const API_URL = process.env.REACT_APP_API_URL

const getSalesDashboard = async (): Promise<SalesDashobard> => {
    try {
        const response = await axios.get(`${API_URL}/sales-dashboard`)
        return response.data

    } catch (error: any) {
        console.error('Failed to fetch sales dashboard data', error)
        return Promise.reject(error.response.data.message || 'Failed to fetch sales dashboard data')
    }
}
const getTotalsPerMonth = async (): Promise<TotalsPerMonthDashboard> => {
    try {
        const response = await axios.get(`${API_URL}/sales-total-dashboard`)
        return response.data

    } catch (error: any) {
        console.error('Failed to fetch sales dashboard data', error)
        return Promise.reject(error.response.data.message || 'Failed to fetch sales dashboard data')
    }
}

const getTopProducts = async (): Promise<{ data: TopProductSoldData[] }> => {
    try {
        const response = await axios.get(`${API_URL}/top-products`)
        return response.data

    } catch (error: any) {
        console.error('Failed to fetch top products dashboard data', error)
        return Promise.reject(error.response.data.message || 'Failed to fetch top products dashboard data')
    }
}

const getTopClients = async (): Promise<TopClientData[]> => {
    try {
        const response = await axios.get(`${API_URL}/top-clients`)
        return response.data

    } catch (error: any) {
        console.error('Failed to fetch top products dashboard data', error)
        return Promise.reject(error.response.data.message || 'Failed to fetch top products dashboard data')
    }
}

export { getSalesDashboard, getTotalsPerMonth, getTopProducts, getTopClients }