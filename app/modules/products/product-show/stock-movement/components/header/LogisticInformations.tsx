import {SVG, toAbsoluteUrl} from '../../../../../../../_metronic/helpers'
import {
  useProductResponseData,
  useProductResponseLoading,
} from '../../../core/ProductResponseProvider'

const LogisticInformations = () => {
  const product = useProductResponseData()
  const isLoading = useProductResponseLoading()

  if (isLoading) <div>Loading</div>

  if (product)
    return (
      <div className='card mb-4'>
        <div className='card-header border-bottom-0'>
          <div className='card-title fs-2'>Informations logistiques</div>
        </div>
        <div className='card-body row g-4'>
          <div className='col-6 col-lg-3 d-flex gap-3 align-items-center'>
            <div className='symbol symbol-65px me-3'>
              <span className='symbol-label bg-light-primary'>
                <span className='svg-icon svg-icon-3x svg-icon-primary'>
                  <SVG
                    path={toAbsoluteUrl('/media/icons/duotune/abstract/abs027.svg')}
                    className='text-primary mw-50px'
                  />
                </span>
              </span>
            </div>
            <div className='d-flex flex-column gap-1'>
              <div className='text-muted fs-5'>Emplacement</div>
              <div className='text-dark fs-3 fw-bold'>Stock principal</div>
            </div>
          </div>
          <div className='col-6 col-lg-3 d-flex gap-3 align-items-center'>
            <div className='symbol symbol-65px me-3'>
              <span className='symbol-label'>
                <span className='svg-icon svg-icon-3x'>
                  <SVG
                    path={toAbsoluteUrl('/media/icons/duotune/general/gen017.svg')}
                    className={`${product.quantity > 0 ? 'text-success' : 'text-danger'} mw-50px`}
                  />
                </span>
              </span>
            </div>
            <div className='d-flex flex-column gap-1'>
              <div className='text-muted fs-5'>État de stock</div>
              <div className='d-flex gap-2 align-items-center'>
                <div className='fs-3 fw-bold'>
                  <span className='fs-3'>{product.quantity}</span>
                </div>
                <div
                  className={`badge ${product.quantity > 0 ? 'text-success' : 'text-danger'}  fs-3`}
                >
                  {product.quantity > 0 ? `En Stock` : `En Rupture`}
                </div>
              </div>
            </div>
          </div>
          <div className='col-6 col-lg-3 d-flex gap-3 align-items-center'>
            <div className='symbol symbol-65px me-3'>
              <span className='symbol-label bg-light-danger'>
                <span className='svg-icon svg-icon-3x svg-icon-danger'>
                  <SVG
                    path={toAbsoluteUrl('/media/icons/duotune/arrows/arr065.svg')}
                    className='text-danger mw-50px'
                  />
                </span>
              </span>
            </div>
            <div className='d-flex flex-column gap-1'>
              <div className='text-muted fs-5'>Minimum</div>
              <div className='fs-3 fw-bold text-danger'>--</div>
            </div>
          </div>
          <div className='col-6 col-lg-3 d-flex gap-3 align-items-center'>
            <div className='symbol symbol-65px me-3'>
              <span className='symbol-label bg-light-success'>
                <span className='svg-icon svg-icon-3x svg-icon-success'>
                  <SVG
                    path={toAbsoluteUrl('/media/icons/duotune/arrows/arr066.svg')}
                    className='text-success mw-50px'
                  />
                </span>
              </span>
            </div>
            <div className='d-flex flex-column gap-1'>
              <div className='text-muted fs-5'>Maximum</div>
              <div className='text-success fs-3 fw-bold'>--</div>
            </div>
          </div>
        </div>
      </div>
    )

  return <div></div>
}

export default LogisticInformations
