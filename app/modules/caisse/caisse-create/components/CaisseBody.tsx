import ProductsGrid from './ProductsGrid'
import {SelectedProducts} from './SelectedProducts'

const CaisseBody = () => {
  return (
    <div className='row'>
      <div className='col-12 col-lg-7'>
        <ProductsGrid />
      </div>
      <div className='col-12 col-lg-5'>
        <SelectedProducts />
      </div>
    </div>
  )
}

export default CaisseBody
