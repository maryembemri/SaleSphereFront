import {FC} from 'react'
import {Link} from 'react-router-dom'
import {SVG, toAbsoluteUrl} from '../../../../../../_metronic/helpers'
import {Product} from '../../../core/models'

type Props = {
  product: Product
}

const generateBadgeClass = (product: Product) => {
  const {quantity, minStock, maxStock} = product
  return quantity === 0
    ? 'badge-light-danger'
    : quantity < minStock && minStock > 0
    ? 'badge-light-warning'
    : quantity > maxStock && maxStock > 0
    ? 'badge-light-info'
    : 'badge-light-success'
}

const generateBadgeText = (product: Product) => {
  const {quantity, minStock, maxStock} = product
  return quantity === 0
    ? `${quantity}: En Rupture`
    : quantity < minStock && minStock > 0
    ? `${quantity}: Manque`
    : quantity > maxStock && maxStock > 0
    ? `${quantity}: Surchage`
    : `${quantity}: En Stock`
}

const CustomProductCard: FC<Props> = ({product}) => {
  const productImageSrc =
    product.category.name.toLocaleLowerCase() === 'logo'
      ? toAbsoluteUrl('/media/svg/product/symbol-svgrepo-com.svg')
      : product.category.name.toLocaleLowerCase() === 'tissu'
      ? toAbsoluteUrl('/media/svg/product/fabric-material-svgrepo-com.svg')
      : product.category.name.toLocaleLowerCase() === 'garniture'
      ? toAbsoluteUrl('/media/svg/product/sleeve-material-svgrepo-com.svg')
      : product.category.name.toLocaleLowerCase() === 'fermeture'
      ? toAbsoluteUrl('/media/svg/product/zipper-material-svgrepo-com.svg')
      : product.category.name.toLocaleLowerCase() === 'manche'
      ? toAbsoluteUrl('/media/svg/product/scarf-clothes-svgrepo-com.svg')
      : toAbsoluteUrl('/media/svg/product/ball-of-wool-fashion-svgrepo-com.svg')

  const badgeClass = generateBadgeClass(product)
  const badgeText = generateBadgeText(product)

  return (
    <div className='col-md-6 col-xl-3'>
      <Link
        className='card border-hover-primary'
        to={`/product/list/show/${product.id}/informations`}
      >
        <div className='text-start d-flex flex-row gap-4'>
          {/* begin:: Avatar */}
          <div className='symbol symbol-35px p-2'>
            <img src={productImageSrc} alt='img' />

            <SVG
              style={{color: product.color ? '#' + product.color?.hexCode : '#B8B8B8'}}
              path={toAbsoluteUrl('/media/icons/duotune/general/gen017.svg')}
              className='svg-icon svg-icon-2 symbol-badge badge badge-circle bg-body start-0'
            />
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
      </Link>
    </div>
  )
}

export default CustomProductCard
