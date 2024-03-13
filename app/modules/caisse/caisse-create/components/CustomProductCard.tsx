import {FC, useMemo} from 'react'
import {SVG, toAbsoluteUrl} from '../../../../../_metronic/helpers'
import {useListView} from '../core/ListViewProvider'
import {useFormikContext} from 'formik'
import {CaisseForm} from '../../core/_models'
import {Product} from '../../../products'

type Props = {
  product: Product
}

const generateBadgeClass = (product: Product) => {
  const {quantity} = product
  if (quantity === undefined) return 'badge-light'
  if (quantity === 0) return 'badge-light-danger'
  if (quantity > 0) return 'badge-light-success'
}

const generateBadgeText = (product: Product) => {
  const {quantity} = product
  if (quantity === undefined) return '--'
  if (quantity === 0) return `${quantity}: En Rupture`
  if (quantity > 0) return `${quantity}: En Stock`
}

const CustomProductCard: FC<Props> = ({product}) => {
  const {setFieldValue} = useFormikContext<CaisseForm>()
  const {selected, onSelect} = useListView()
  const isSelected = useMemo(() => selected.includes(product.id), [product.id, selected])

  const productImageSrc = toAbsoluteUrl('/media/examples/product/placeholder.jpg')

  const badgeClass = generateBadgeClass(product)
  const badgeText = generateBadgeText(product)

  const handleItemSelect = (product: Product) => {
    onSelect(product)
    if (selected.includes(product.id)) {
      setFieldValue('productNumber', selected.length - 1)
    } else {
      setFieldValue('productNumber', selected.length + 1)
    }
  }

  return (
    <div className='col-md-6 col-xl-4'>
      <div
        onClick={() => handleItemSelect(product)}
        className={`card cursor-pointer border-hover-primary rounded${
          isSelected ? 'border border-primary border-2 shadow-sm' : ''
        }`}
      >
        <div className='text-start d-flex flex-row gap-4'>
          {/* begin:: Avatar */}
          <div className='symbol symbol-50px m-1'>
            <img src={productImageSrc} alt='img' />
            <div>
              <SVG
                path={toAbsoluteUrl('/media/icons/duotune/finance/fin006.svg')}
                className='svg-icon svg-icon-2 symbol-badge badge badge-circle bg-body start-100 top-18 text-success'
              />
            </div>
          </div>
          <div className='d-flex flex-column'>
            <span
              className='text-gray-800 text-hover-primary mb-1 fw-semibold fs-6 text-truncate'
              style={{maxWidth: '200px'}}
            >
              {product.label}
            </span>
            <small>
              <span className='text-truncate' style={{maxWidth: '200px'}}>
                {product.code}
              </span>
            </small>
          </div>
        </div>
        <div className={`badge ${badgeClass} px-4 py-2`}>{badgeText}</div>
      </div>
    </div>
  )
}

export default CustomProductCard
