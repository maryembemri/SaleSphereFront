import {FC} from 'react'
import {SVG, toAbsoluteUrl} from '../../../../../../_metronic/helpers'
import {Link} from 'react-router-dom'
import {Product} from '../../../core/models'

type Props = {
  product: Product
}

const ProductInfoCell: FC<Props> = ({product}) => (
  <div className='text-start d-flex flex-row gap-4 ps-2'>
    {/* begin:: Avatar */}
    <div className='symbol symbol-45px'>
      {product.category.name.toLocaleLowerCase() === 'logo' ? (
        <img src={toAbsoluteUrl('/media/svg/product/symbol-svgrepo-com.svg')} alt='img' />
      ) : product.category.name.toLocaleLowerCase() === 'tissu' ? (
        <img src={toAbsoluteUrl('/media/svg/product/fabric-material-svgrepo-com.svg')} alt='img' />
      ) : product.category.name.toLocaleLowerCase() === 'garniture' ? (
        <img src={toAbsoluteUrl('/media/svg/product/sleeve-material-svgrepo-com.svg')} alt='img' />
      ) : product.category.name.toLocaleLowerCase() === 'fermeture' ? (
        <img src={toAbsoluteUrl('/media/svg/product/zipper-material-svgrepo-com.svg')} alt='img' />
      ) : product.category.name.toLocaleLowerCase() === 'manche' ? (
        <img src={toAbsoluteUrl('/media/svg/product/scarf-clothes-svgrepo-com.svg')} alt='img' />
      ) : (
        <img
          src={toAbsoluteUrl('/media/svg/product/ball-of-wool-fashion-svgrepo-com.svg')}
          alt='img'
        />
      )}

      <div>
        <SVG
          style={{color: product.color ? '#' + product.color?.hexCode : '#B8B8B8'}}
          path={toAbsoluteUrl('/media/icons/duotune/general/gen017.svg')}
          className='svg-icon svg-icon-2 symbol-badge badge badge-circle bg-body start-100 top-18'
        />
      </div>
    </div>
    <div className='d-flex flex-column'>
      <Link
        to={`/product/list/show/${product.id}/informations`}
        className='text-gray-800 text-hover-primary mb-1'
      >
        {product.label}
      </Link>
      <small>{product.category.name}</small>
    </div>
  </div>
)

export {ProductInfoCell}
