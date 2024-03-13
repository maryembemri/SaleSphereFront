import {FC} from 'react'

import {useSupplierResponseData, useSupplierResponseLoading} from './core/SupplierResponseProvider'
import {Currency, SVG, toAbsoluteUrl} from '../../../../_metronic/helpers'

const SupplierShowHeader: FC = () => {
  const isLoading = useSupplierResponseLoading()
  const supplier = useSupplierResponseData()

  if (isLoading)
    return (
      <div className='card rounded-4 opacity-75'>
        <div className='d-flex flex-column flex-sm-row  justify-content-between gap-4 p-3 p-lg-4'>
          <div className='d-flex flex-column justify-content-between ps-4 py-2'>
            <div className='h1 fs-3  text-capitalize'>
              <div className='spinner-border text-gray-600' role='status'>
                <span className='sr-only'>Chargement...</span>
              </div>
            </div>
            <div className='d-flex flex-column flex-xl-row align-items-xl-center gap-3'>
              <div className='d-flex align-items-center gap-3'>
                <div className='btn btn-primary btn-icon h-30px w-30px'>
                  <span className='svg-icon svg-icon-6'>
                    <svg
                      width='14'
                      height='14'
                      viewBox='0 0 14 14'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      className='mh-50px'
                    >
                      <path
                        d='M13.3336 6.40011L1.4003 0.400113C0.800299 0.133447 0.133633 0.66678 0.400299 1.26678L2.06697 5.73345L9.66697 7.00011L2.06697 8.26678L0.400299 12.7334C0.200299 13.3334 0.800299 13.8668 1.4003 13.5334L13.3336 7.53345C13.8003 7.33345 13.8003 6.66678 13.3336 6.40011Z'
                        fill='currentColor'
                      ></path>
                    </svg>
                  </span>
                </div>
                <span className='text-muted fw-blod'>{'--'}</span>
              </div>

              <div className='d-flex align-items-center justify-content-center gap-3'>
                <span className='btn btn-success btn-icon h-30px w-30px'>
                  <i className='fas fa-phone-alt fs-6'></i>
                </span>
                <div className='flex-grow-1 text-muted fw-blod'>
                  <div className='d-inline-block'>--</div>
                </div>
              </div>
            </div>
          </div>
          <div className='d-flex  gap-1 gap-md-4 justify-content-evently flex-wrap'>
            <div className='rounded-2 border border-1 border-dashed d-flex flex-column p-4 gap-2 '>
              <div className='fw-bold text-dark fs-3'>--</div>
              <span className='text-muted fw-bold'>FACTURES PAYÉES</span>
            </div>
            <div className='rounded-2 border border-1 border-dashed d-flex flex-column p-4 gap-2 '>
              <div className='fw-bold text-dark fs-3'>--</div>
              <span className='text-muted fw-bold'>FACTURE A PAYER</span>
            </div>
            <div className='rounded-2 border border-1 border-dashed d-flex flex-column p-4 gap-2 '>
              <div className='d-flex gap-1 align-items-center'>
                <span className='fw-bold text-dark fs-3'>--</span>
                <sup className='fs-8 text-muted fw-semibold ps-1'>TND</sup>
              </div>
              <span className='text-muted fw-bold'>Chiffre d'affaires</span>
            </div>
          </div>
        </div>
        <div className='separator'></div>
        <ul className='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bold ps-6'>
          <li className='nav-item'>
            <span className='nav-link text-active-primary py-3 me-6 cursor-pointer active'>
              Aperçu
            </span>
          </li>
        </ul>
      </div>
    )

  if (supplier)
    return (
      <div className='card rounded-4'>
        <div className='d-flex flex-column flex-sm-row  justify-content-between gap-4 p-3 p-lg-4'>
          <div className='d-flex flex-column justify-content-between ps-4 py-2'>
            <div className='h1 fs-3 text-gray-800 text-capitalize'>
              <SVG
                path={toAbsoluteUrl('/media/icons/duotune/ecommerce/ecm006.svg')}
                className='svg-icon svg-icon-2 svg-icon-gray-600 me-2'
              />

              {supplier.name.toLowerCase()}
            </div>
            <div className='d-flex flex-column flex-xl-row align-items-xl-center gap-3'>
              <div className='d-flex align-items-center gap-3'>
                <a
                  className='btn btn-primary btn-icon h-30px w-30px'
                  target='_self'
                  href={`mailto:${supplier.email}`}
                >
                  <span className='svg-icon svg-icon-6'>
                    <svg
                      width='14'
                      height='14'
                      viewBox='0 0 14 14'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      className='mh-50px'
                    >
                      <path
                        d='M13.3336 6.40011L1.4003 0.400113C0.800299 0.133447 0.133633 0.66678 0.400299 1.26678L2.06697 5.73345L9.66697 7.00011L2.06697 8.26678L0.400299 12.7334C0.200299 13.3334 0.800299 13.8668 1.4003 13.5334L13.3336 7.53345C13.8003 7.33345 13.8003 6.66678 13.3336 6.40011Z'
                        fill='currentColor'
                      ></path>
                    </svg>
                  </span>
                </a>
                <span className='text-muted fw-blod'>{supplier.email || '--'}</span>
              </div>
              {supplier.phone ? (
                <div className='d-flex align-items-center justify-content-center gap-3'>
                  <a
                    className='btn btn-success btn-icon h-30px w-30px'
                    target='_self'
                    href={'tel:' + supplier.phone}
                  >
                    <i className='fas fa-phone-alt fs-6'></i>
                  </a>
                  <div className='flex-grow-1 text-muted fw-blod'>
                    <div className='d-inline-block'>{supplier.phone || '--'}</div>
                  </div>
                </div>
              ) : (
                <div className='d-flex align-items-center justify-content-center gap-3'>
                  <span className='btn btn-success btn-icon h-30px w-30px'>
                    <i className='fas fa-phone-alt fs-6'></i>
                  </span>
                  <div className='flex-grow-1 text-muted fw-blod'>
                    <div className='d-inline-block'>--</div>
                  </div>
                </div>
              )}
              {supplier.mobile && (
                <div className='d-flex align-items-center justify-content-center gap-3'>
                  <a
                    className='btn btn-success btn-icon h-30px w-30px'
                    target='_self'
                    href={'tel:' + supplier.mobile}
                  >
                    <i className='fas fa-phone-alt fs-6'></i>
                  </a>
                  <div className='flex-grow-1 text-muted fw-blod'>
                    <div className='d-inline-block'>{supplier.mobile}</div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className='d-flex  gap-1 gap-md-4 justify-content-evently flex-wrap'>
            <div className='rounded-2 border border-1 border-dashed d-flex flex-column p-4 gap-2 '>
              <div className='fw-bold text-dark fs-3'>--</div>
              <span className='text-muted fw-bold'>FACTURES PAYÉES</span>
            </div>
            <div className='rounded-2 border border-1 border-dashed d-flex flex-column p-4 gap-2 '>
              <div className='fw-bold text-dark fs-3'>--</div>
              <span className='text-muted fw-bold'>FACTURE A PAYER</span>
            </div>
            <div className='rounded-2 border border-1 border-dashed d-flex flex-column p-4 gap-2 '>
              <div className='d-flex gap-1 align-items-center'>
                <span className='fw-bold text-dark fs-3'>
                  {' '}
                  <Currency value={supplier.revenue} />
                </span>
                <sup className='fs-8 text-muted fw-semibold ps-1'>TND</sup>
              </div>
              <span className='text-muted fw-bold'>Chiffre d'affaires</span>
            </div>
          </div>
        </div>
        <div className='separator'></div>
        <ul className='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bold ps-6'>
          <li className='nav-item'>
            <span className='nav-link text-active-primary py-3 me-6 cursor-pointer active'>
              Aperçu
            </span>
          </li>
          {/* <li className='nav-item'>
          <span className='nav-link text-active-primary py-5 me-6 cursor-pointer'>
            Relevé de compte
          </span>
        </li>
        <li className='nav-item'>
          <span className='nav-link text-active-primary py-5 me-6 cursor-pointer'>Document</span>
        </li>
        <li className='nav-item'>
          <span className='nav-link text-active-primary py-5 me-6 cursor-pointer'>
            Paiements non affectés
          </span>
        </li> */}
        </ul>
      </div>
    )

  return null
}

export default SupplierShowHeader
