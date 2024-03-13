import React from 'react'
import {Route, Routes} from 'react-router-dom'
import {PageTitle} from '../../_metronic/layout/core'
import StockListWrapper from '../modules/stock/stock-management/stocks-list/StockList'

const StockPage = () => {
  return (
    <Routes>
      <Route
        path='management'
        element={
          <>
            <PageTitle breadcrumbs={[]}>Gestion de Stock</PageTitle>
            <StockListWrapper />
          </>
        }
      />
    </Routes>
  )
}

export default StockPage
