import React, {FC} from 'react'
import {Product} from '../../../core/models'

type Props = {
  product: Product
}

const ProductStockCell: FC<Props> = ({product}) => {
  if (product.quantity === undefined) return null

  const quantity = product.quantity
  const min = product.minStock
  const max = product.maxStock

  return (
    <div
      className={`badge ${
        quantity === 0
          ? 'badge-light-danger'
          : quantity < min && min > 0
          ? 'badge-light-warning'
          : quantity > max && max > 0
          ? 'badge-light-info'
          : 'badge-light-success'
      } px-4 py-2`}
    >
      {quantity === 0
        ? `${quantity}: En Rupture`
        : quantity < min && min > 0
        ? `${quantity}: Manque`
        : quantity > max && max > 0
        ? `${quantity}: Surchage`
        : `${quantity}: En Stock`}
    </div>
  )
}

export default ProductStockCell
