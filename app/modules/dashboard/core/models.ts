export type SalesDashobard = {
    salesWeek?: number,
    progressWeek?: number,
    salesMonth?: number,
    progressMonth?: number,
    salesYear?: number,
    progressYear?: number
}

export type TotalsPerMonthDashboard = {
    months: string[]
    totalSales: number[]
    totalPurchases: number[]
}

export type TopProductSoldData = {
    product: {
        id: number
        title: string
        code: string
    }
    quantity: number
}


export type TopClientData = {
    id: number
    name: string
    revenue: number
}