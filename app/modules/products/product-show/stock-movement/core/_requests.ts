import axios from "axios"
import { StockMovementsQueryResponse } from "./_init"

const API_URL = process.env.REACT_APP_API_URL

const getStockMovement = async (productId?: string, query?: string): Promise<StockMovementsQueryResponse> => {
    const response = await axios
        .get(`${API_URL}/stock-movement-products/${productId}?${query}`,)
    return response.data
}

export { getStockMovement }