import React from 'react'
import StockCard from './components/StockCard'

const StockList = () => {
  return (
    <div>
      <StockCard
        id={41}
        name={'Principal warehouse'}
        address={'17, Rue Farhat Hached, Arianna 2080, Arianna'}
        value={301456.1}
      />
      <StockCard
        id={41}
        name={'Scondary warehouse'}
        address={'23, Avune Habib Borgiba, Tunis 1000, Tunisie'}
        value={1456.99}
      />
      <StockCard
        id={41}
        name={'Test warehouse'}
        address={'14, Rue lindepandance, Msaken 4070, Sousse'}
        value={-680.0}
      />
    </div>
  )
}

const StockListWrapper = () => {
  return <StockList />
}

export default StockListWrapper
