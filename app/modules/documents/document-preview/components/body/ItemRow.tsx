import React, {FC} from 'react'

import {Currency} from '../../../../../../_metronic/helpers'
import {Item} from '../../../core/models'
import {useDocumentResponseData} from '../../core/DocumentResponseProvider'

type Props = {
  item: Item
  id: number
}

const ItemRow: FC<Props> = ({item, id}) => {
  const data = useDocumentResponseData()?.document
  const product = item.product

  if (product) {
    return (
      <>
        <th className='text-center'>{id}</th>
        <td>{product.code}</td>
        <td>
          <div className='d-flex flex-column'>
            <span>{item.product?.label}</span>
            {product.description && (
              <span className='text-gray-700 fs-6'>{product.description}</span>
            )}
            {data?.code === 'CA' && (
              <div>
                {product.color && <span className='text-gray-600 fs-6'>{product.color.label}</span>}
              </div>
            )}
          </div>
        </td>
        <td>{item.quantity}</td>
        <td>
          <Currency value={item.price} />
        </td>
        <td className='text-center'>{item.tax}%</td>

        <td className='text-center'>
          <Currency value={item.price * item.quantity} />
        </td>
      </>
    )
  }

  return <div></div>
}

export default ItemRow
