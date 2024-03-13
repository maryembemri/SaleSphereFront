import {FC} from 'react'
import DetailsCard from './DetailsCard'
import {useProductResponseData, useProductResponseLoading} from '../core/ProductResponseProvider'
import {Currency} from '../../../../../_metronic/helpers'
import {Product} from '../../core/models'

const Information: FC = () => {
  const isLoading = useProductResponseLoading()
  const product = useProductResponseData()

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
  const generateColor = (product: Product) => {
    const {quantity, minStock, maxStock} = product
    return quantity === 0
      ? 'danger'
      : quantity < minStock && minStock > 0
      ? 'warning'
      : quantity > maxStock && maxStock > 0
      ? 'info'
      : 'success'
  }

  const generateBadgeText = (product: Product) => {
    const {quantity, minStock, maxStock} = product
    return quantity === 0
      ? `En Rupture`
      : quantity < minStock && minStock > 0
      ? `Manque`
      : quantity > maxStock && maxStock > 0
      ? `Surchage`
      : `En Stock`
  }

  if (isLoading)
    return (
      <div className='opacity-50 row g-4'>
        <DetailsCard title='Prix achat'>
          <div>
            <span className='fs-2x text-dark fw-bold '>
              <Currency value={0} />
              &nbsp;TND
            </span>
            <sup className='text-gray-700 fs-3 ms-2'>TTC</sup>
          </div>
          <div className='fs-1 fw-semibold text-gray-700 '>
            <Currency value={0} />
            &nbsp;TND<sup className='text-gray-700 fs-3 ms-2 '>HT</sup>
          </div>
        </DetailsCard>
        <DetailsCard title='TVA' color='success'>
          <div>
            <span className='fs-2x text-dark fw-bold '>--</span>
          </div>
        </DetailsCard>

        <DetailsCard title='Valeur unitaire en stock' color='primary'>
          <div>
            <span className='fs-2x text-dark fw-bold '>
              <Currency value={0} />
              &nbsp;TND
            </span>
          </div>
        </DetailsCard>
        <DetailsCard title='Quantitée' color={'primary'}>
          <div>
            <span className='fs-2x text-dark fw-bold '>
              --
              <sup className='text-gray-700 fs-3 mx-1'>--</sup>
              <sup className={`badge badge-light fs-5 ms-2`}>--</sup>
            </span>
          </div>
        </DetailsCard>

        <div className='col-lg-4'>
          <div className='card h-100'>
            <div className='card-header border-bottom-0'>
              <div className='card-title text-gray-800 fw-bold fs-1'>Details de produit</div>
            </div>
            <div className='card-body d-flex flex-column gap-4 pt-0'>
              <li className='d-flex align-items-center'>
                <span className={`bullet bullet-vertical me-5 h-100 bg-success`}></span>
                <div className='d-flex flex-column gap-1'>
                  <div className='fs-5 text-gray-700'>Code product</div>
                  <div className='d-flex fs-3'>
                    <span className='svg-icon svg-icon-1 me-1'></span>
                    <div className='fw-bold'>--</div>
                  </div>
                </div>
              </li>

              <li className='d-flex align-items-center'>
                <span className={`bullet bullet-vertical me-5 h-100 bg-success`}></span>
                <div className='d-flex flex-column gap-1'>
                  <div className='fs-5 text-gray-700'>Category</div>
                  <div className='d-flex fs-3'>
                    <span className='svg-icon svg-icon-1 me-1'></span>
                    <div className='fw-bold'>--</div>
                  </div>
                </div>
              </li>

              <li className='d-flex align-items-center'>
                <span className={`bullet bullet-vertical me-5 h-100 bg-success`}></span>
                <div className='d-flex flex-column gap-1'>
                  <div className='fs-5 text-gray-700'>Description</div>
                  <div className='d-flex fs-3'>
                    <span className='svg-icon svg-icon-1 me-1'></span>
                    <div className='fw-bold fs-6'>--</div>
                  </div>
                </div>
              </li>
            </div>
          </div>
        </div>
        <div className='col-lg-4'>
          <div className='card h-100'>
            <div className='card-header border-bottom-0'>
              <div className='card-title text-gray-800 fw-bold fs-1'>Grille tarifiare</div>
            </div>
            <div className='card-body d-flex flex-column gap-4 pt-0'>
              <li className='d-flex align-items-center'>
                <span className={`bullet bullet-vertical me-5 h-100 bg-primary`}></span>
                <div className='d-flex flex-column gap-1'>
                  <div className='fs-5 text-gray-700'>Prix achat</div>
                  <div className='d-flex fs-3'>
                    <span className='svg-icon svg-icon-1 me-1'></span>
                    <div className='fw-bold'>
                      <Currency value={0} />
                    </div>
                  </div>
                </div>
              </li>
              <li className='d-flex align-items-center'>
                <span className={`bullet bullet-vertical me-5 h-100 bg-primary`}></span>
                <div className='d-flex flex-column gap-1'>
                  <div className='fs-5 text-gray-700'>TVA</div>
                  <div className='d-flex fs-3'>
                    <span className='svg-icon svg-icon-1 me-1'></span>
                    --
                  </div>
                </div>
              </li>
              <li className='d-flex align-items-center'>
                <span className={`bullet bullet-vertical me-5 h-100 bg-primary`}></span>
                <div className='d-flex flex-column gap-1'>
                  <div className='fs-5 text-gray-700'>Unité</div>
                  <div className='d-flex fs-3'>
                    <span className='svg-icon svg-icon-1 me-1'></span>
                    <div className='fw-bold'>--</div>
                  </div>
                </div>
              </li>
            </div>
          </div>
        </div>

        <div className='col-lg-4'>
          <div className='card h-100'>
            <div className='card-header pb-0 border-bottom-0'>
              <div className='card-title text-gray-800 fw-bold fs-1'>Informations logistiques</div>
            </div>
            <div className='card-body d-flex flex-column gap-6 pt-0 '>
              <div className='d-flex gap-2'>
                <div className='symbol symbol-45px'>
                  <span className='symbol-label'>
                    <span className='svg-icon svg-icon-1'>
                      <svg
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className='mh-50px'
                      >
                        <rect x='2' y='2' width='9' height='9' rx='2' fill='currentColor'></rect>
                        <rect
                          opacity='0.3'
                          x='13'
                          y='2'
                          width='9'
                          height='9'
                          rx='2'
                          fill='currentColor'
                        ></rect>
                        <rect
                          opacity='0.3'
                          x='13'
                          y='13'
                          width='9'
                          height='9'
                          rx='2'
                          fill='currentColor'
                        ></rect>
                        <rect
                          opacity='0.3'
                          x='2'
                          y='13'
                          width='9'
                          height='9'
                          rx='2'
                          fill='currentColor'
                        ></rect>
                      </svg>
                    </span>
                  </span>
                </div>
                <div className='d-flex flex-column justify-content-center gap-1'>
                  <div className='fs-3 text-gray-700'>Emplacement</div>
                  <div className='fw-semibold fs-3'>Principal warehouse</div>
                </div>
              </div>
              <div>
                <div className='d-flex gap-3'>
                  <div className='badge badge-light-success fs-5'>Stock maximum</div>
                  <div className='text-success fs-3 ms-3'>--</div>
                </div>
              </div>
              <div className='d-flex gap-3'>
                <div className='badge badge-light-danger fs-5'>Stock minimum</div>
                <div className='text-danger fs-3 ms-3'>--</div>
              </div>
              <div className='mt-4 ms-2'>
                <div className='form-check form-check-custom form-check-solid'>
                  <input className='form-check-input' disabled type='checkbox' id='allow-alert' />
                  <label className='form-check-label fs-3' htmlFor='allow-alert'>
                    Désactiver l'alerte lorsque le stock est vide
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )

  if (product)
    return (
      <div className='row g-4'>
        <DetailsCard title='Prix achat'>
          <div>
            <span className='fs-2x text-dark fw-bold '>
              <Currency value={product.price + product.price * (product.vat?.value || 0)} />
              &nbsp;TND
            </span>
            <sup className='text-gray-700 fs-3 ms-2'>TTC</sup>
          </div>
          <div className='fs-1 fw-semibold text-gray-700 '>
            <Currency value={product.price} />
            &nbsp;TND<sup className='text-gray-700 fs-3 ms-2 '>HT</sup>
          </div>
        </DetailsCard>
        <DetailsCard title='TVA' color='success'>
          <div>
            <span className='fs-2x text-dark fw-bold '>
              {product.vat ? (
                <div className='fw-bold'>
                  {parseInt(String(product.vat?.value * 100))}
                  <sup className='text-gray-700 fs-3 ms-2'>%</sup>
                </div>
              ) : (
                '--'
              )}
            </span>
          </div>
        </DetailsCard>

        <DetailsCard title='Valeur unitaire en stock' color='primary'>
          <div>
            <span className='fs-2x text-dark fw-bold '>
              <Currency value={product.price} />
              &nbsp;TND
            </span>
          </div>
        </DetailsCard>
        <DetailsCard title='Quantitée' color={generateColor(product)}>
          <div>
            <span className='fs-2x text-dark fw-bold '>
              {product.quantity}{' '}
              <sup className='text-gray-700 fs-3 mx-1'>
                {product.unit.label}
                {product.quantity > 1 ? 's' : ''}
              </sup>
              <sup className={`badge ${generateBadgeClass(product)} fs-5 ms-2`}>
                {generateBadgeText(product)}
              </sup>
            </span>
          </div>
        </DetailsCard>

        <div className='col-lg-4'>
          <div className='card h-100'>
            <div className='card-header border-bottom-0'>
              <div className='card-title text-gray-800 fw-bold fs-1'>Details de produit</div>
            </div>
            <div className='card-body d-flex flex-column gap-4 pt-0'>
              <li className='d-flex align-items-center'>
                <span className={`bullet bullet-vertical me-5 h-100 bg-success`}></span>
                <div className='d-flex flex-column gap-1'>
                  <div className='fs-5 text-gray-700'>Code product</div>
                  <div className='d-flex fs-3'>
                    <span className='svg-icon svg-icon-1 me-1'></span>
                    <div className='fw-bold'>{product.code}</div>
                  </div>
                </div>
              </li>

              <li className='d-flex align-items-center'>
                <span className={`bullet bullet-vertical me-5 h-100 bg-success`}></span>
                <div className='d-flex flex-column gap-1'>
                  <div className='fs-5 text-gray-700'>Category</div>
                  <div className='d-flex fs-3'>
                    <span className='svg-icon svg-icon-1 me-1'></span>
                    <div className='fw-bold'>{product.category.name}</div>
                  </div>
                </div>
              </li>

              <li className='d-flex align-items-center'>
                <span className={`bullet bullet-vertical me-5 h-100 bg-success`}></span>
                <div className='d-flex flex-column gap-1'>
                  <div className='fs-5 text-gray-700'>Description</div>
                  <div className='d-flex fs-3'>
                    <span className='svg-icon svg-icon-1 me-1'></span>
                    <div className='fw-bold fs-6'>{product.description || '--'}</div>
                  </div>
                </div>
              </li>
            </div>
          </div>
        </div>
        <div className='col-lg-4'>
          <div className='card h-100'>
            <div className='card-header border-bottom-0'>
              <div className='card-title text-gray-800 fw-bold fs-1'>Grille tarifiare</div>
            </div>
            <div className='card-body d-flex flex-column gap-4 pt-0'>
              <li className='d-flex align-items-center'>
                <span className={`bullet bullet-vertical me-5 h-100 bg-primary`}></span>
                <div className='d-flex flex-column gap-1'>
                  <div className='fs-5 text-gray-700'>Prix achat</div>
                  <div className='d-flex fs-3'>
                    <span className='svg-icon svg-icon-1 me-1'></span>
                    <div className='fw-bold'>
                      <Currency value={product.price} />
                    </div>
                  </div>
                </div>
              </li>
              <li className='d-flex align-items-center'>
                <span className={`bullet bullet-vertical me-5 h-100 bg-primary`}></span>
                <div className='d-flex flex-column gap-1'>
                  <div className='fs-5 text-gray-700'>TVA</div>
                  <div className='d-flex fs-3'>
                    <span className='svg-icon svg-icon-1 me-1'></span>
                    {product.vat ? (
                      <div className='fw-bold'>{parseInt(String(product.vat?.value * 100))}%</div>
                    ) : (
                      '--'
                    )}
                  </div>
                </div>
              </li>
              <li className='d-flex align-items-center'>
                <span className={`bullet bullet-vertical me-5 h-100 bg-primary`}></span>
                <div className='d-flex flex-column gap-1'>
                  <div className='fs-5 text-gray-700'>Unité</div>
                  <div className='d-flex fs-3'>
                    <span className='svg-icon svg-icon-1 me-1'></span>
                    <div className='fw-bold'>{product.unit.label}</div>
                  </div>
                </div>
              </li>
            </div>
          </div>
        </div>

        <div className='col-lg-4'>
          <div className='card h-100'>
            <div className='card-header pb-0 border-bottom-0'>
              <div className='card-title text-gray-800 fw-bold fs-1'>Informations logistiques</div>
            </div>
            <div className='card-body d-flex flex-column gap-6 pt-0 '>
              <div className='d-flex gap-2'>
                <div className='symbol symbol-45px'>
                  <span className='symbol-label'>
                    <span className='svg-icon svg-icon-1'>
                      <svg
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className='mh-50px'
                      >
                        <rect x='2' y='2' width='9' height='9' rx='2' fill='currentColor'></rect>
                        <rect
                          opacity='0.3'
                          x='13'
                          y='2'
                          width='9'
                          height='9'
                          rx='2'
                          fill='currentColor'
                        ></rect>
                        <rect
                          opacity='0.3'
                          x='13'
                          y='13'
                          width='9'
                          height='9'
                          rx='2'
                          fill='currentColor'
                        ></rect>
                        <rect
                          opacity='0.3'
                          x='2'
                          y='13'
                          width='9'
                          height='9'
                          rx='2'
                          fill='currentColor'
                        ></rect>
                      </svg>
                    </span>
                  </span>
                </div>
                <div className='d-flex flex-column justify-content-center gap-1'>
                  <div className='fs-3 text-gray-700'>Emplacement</div>
                  <div className='fw-semibold fs-3'>Principal warehouse</div>
                </div>
              </div>
              <div>
                <div className='d-flex gap-3'>
                  <div className='badge badge-light-success fs-5'>Stock maximum</div>
                  <div className='text-success fs-3 ms-3'>{product.minStock}</div>
                </div>
              </div>
              <div className='d-flex gap-3'>
                <div className='badge badge-light-danger fs-5'>Stock minimum</div>
                <div className='text-danger fs-3 ms-3'>{product.maxStock}</div>
              </div>
              <div className='mt-4 ms-2'>
                <div className='form-check form-check-custom form-check-solid'>
                  <input className='form-check-input' disabled type='checkbox' id='allow-alert' />
                  <label className='form-check-label fs-3' htmlFor='allow-alert'>
                    Désactiver l'alerte lorsque le stock est vide
                  </label>
                </div>
              </div>
              {/* <div className='mt-4 ms-2'>
                <div className='form-check form-check-custom form-check-solid'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    disabled
                    id='allow_empty_stock'
                  />
                  <label className='form-check-label fs-3' htmlFor='allow_empty_stock'>
                    Autoriser la vente lorsque le stock est vide
                  </label>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    )

  return <div></div>
}

export default Information
