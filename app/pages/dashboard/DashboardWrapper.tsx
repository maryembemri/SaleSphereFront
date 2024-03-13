/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import SalesDashboardSection from '../../modules/dashboard/SalesDashboardSection'
import PurchasesAndSales from '../../modules/dashboard/PurchasesAndSales'
import TopClients from '../../modules/dashboard/TopClients'
import TopProductsSold from '../../modules/dashboard/TopArticlesSold'

const DashboardPage: FC = () => (
  <>
    <SalesDashboardSection />

    <div className='row gy-3 g-xl-3  gx-xl-10'>
      <div className='col-sm-6 col-md-6 mb-xl-12'>
        <PurchasesAndSales />
      </div>

      <div className='col-sm-6 col-md-6 mb-xl-12'>
        <TopProductsSold />
      </div>

      <div className='col-sm-6 col-md-6 mb-xl-12'>
        <TopClients />
      </div>
    </div>

    {/* <div className='row gy-3 g-xl-3  gx-xl-10'>
      <div className='col-sm-6 col-md-6 mb-xl-10'>
        <div className='card card-xl-stretch mb-xl-8'>
          <div className='card-header align-items-center border-0 mt-4'>
            <h3 className='card-title align-items-start flex-column'>
              <span className='fw-semibold mb-2 text-dark'>Activités</span>
            </h3>
            <div className='card-toolbar' />
          </div>
          <div className='card-body pt-5'>
            <div className='timeline-label hover-scroll-overlay-y' style={{height: 350}}>
              <div className='timeline-item'>
                <div className='timeline-label fw-semibold text-gray-800 fs-6'>
                  <div className='d-flex flex-column'>
                    <span> 03:33</span>
                    <span className='fs-8 text-muted'>13/09/23</span>
                  </div>
                </div>
                <div className='timeline-badge'>
                  <i className='fa fa-genderless  fs-1 text-success' />
                </div>
                <div className='timeline-content fw-mormal ps-3'>
                  Walid Ben Ahmed a créé le bon de sortie BS-000456
                </div>
              </div>
              <div className='timeline-item'>
                <div className='timeline-label fw-semibold text-gray-800 fs-6'>
                  <div className='d-flex flex-column'>
                    <span> 02:29</span>
                    <span className='fs-8 text-muted'>13/09/23</span>
                  </div>
                </div>
                <div className='timeline-badge'>
                  <i className='fa fa-genderless  fs-1 text-success' />
                </div>
                <div className='timeline-content fw-mormal ps-3'>
                  Walid Ben Ahmed a annulé le devis{' '}
                </div>
              </div>
              <div className='timeline-item'>
                <div className='timeline-label fw-semibold text-gray-800 fs-6'>
                  <div className='d-flex flex-column'>
                    <span> 11:58</span>
                    <span className='fs-8 text-muted'>13/09/23</span>
                  </div>
                </div>
                <div className='timeline-badge'>
                  <i className='fa fa-genderless  fs-1 text-success' />
                </div>
                <div className='timeline-content fw-mormal ps-3'>
                  Walid Ben Ahmed a annulé le devis{' '}
                </div>
              </div>
              <div className='timeline-item'>
                <div className='timeline-label fw-semibold text-gray-800 fs-6'>
                  <div className='d-flex flex-column'>
                    <span> 11:43</span>
                    <span className='fs-8 text-muted'>13/09/23</span>
                  </div>
                </div>
                <div className='timeline-badge'>
                  <i className='fa fa-genderless  fs-1 text-warning' />
                </div>
                <div className='timeline-content fw-mormal ps-3'>
                  Walid Ben Ahmed a modifié le fournisseur DonnerVitte reference 40100001
                </div>
              </div>
              <div className='timeline-item'>
                <div className='timeline-label fw-semibold text-gray-800 fs-6'>
                  <div className='d-flex flex-column'>
                    <span> 09:25</span>
                    <span className='fs-8 text-muted'>12/09/23</span>
                  </div>
                </div>
                <div className='timeline-badge'>
                  <i className='fa fa-genderless  fs-1 text-warning' />
                </div>
                <div className='timeline-content fw-mormal ps-3'>
                  Walid Ben Ahmed a modifié le fournisseur DonnerVitte reference 40100001
                </div>
              </div>
              <div className='timeline-item'>
                <div className='timeline-label fw-semibold text-gray-800 fs-6'>
                  <div className='d-flex flex-column'>
                    <span> 03:18</span>
                    <span className='fs-8 text-muted'>12/09/23</span>
                  </div>
                </div>
                <div className='timeline-badge'>
                  <i className='fa fa-genderless  fs-1 text-warning' />
                </div>
                <div className='timeline-content fw-mormal ps-3'>
                  Walid Ben Ahmed a créé le fournisseur DonnerVitte reference 40100001
                </div>
              </div>
              <div className='timeline-item'>
                <div className='timeline-label fw-semibold text-gray-800 fs-6'>
                  <div className='d-flex flex-column'>
                    <span> 01:52</span>
                    <span className='fs-8 text-muted'>12/09/23</span>
                  </div>
                </div>
                <div className='timeline-badge'>
                  <i className='fa fa-genderless  fs-1 text-success' />
                </div>
                <div className='timeline-content fw-mormal ps-3'>
                  Walid Ben Ahmed a créé un devis DEV-000001
                </div>
              </div>
              <div className='timeline-item'>
                <div className='timeline-label fw-semibold text-gray-800 fs-6'>
                  <div className='d-flex flex-column'>
                    <span> 01:41</span>
                    <span className='fs-8 text-muted'>12/09/23</span>
                  </div>
                </div>
                <div className='timeline-badge'>
                  <i className='fa fa-genderless  fs-1 text-info' />
                </div>
                <div className='timeline-content fw-mormal ps-3'>
                  Walid Ben Ahmed a créé un client Lazhar Arouch reference 41100002
                </div>
              </div>
              <div className='timeline-item'>
                <div className='timeline-label fw-semibold text-gray-800 fs-6'>
                  <div className='d-flex flex-column'>
                    <span> 01:38</span>
                    <span className='fs-8 text-muted'>12/09/23</span>
                  </div>
                </div>
                <div className='timeline-badge'>
                  <i className='fa fa-genderless  fs-1 text-primary' />
                </div>
                <div className='timeline-content fw-mormal ps-3'>
                  Walid Ben Ahmed a ajouté Appareil de chauffage référence P-00001
                </div>
              </div>
              <div className='timeline-item'>
                <div className='timeline-label fw-semibold text-gray-800 fs-6'>
                  <div className='d-flex flex-column'>
                    <span> 01:30</span>
                    <span className='fs-8 text-muted'>12/09/23</span>
                  </div>
                </div>
                <div className='timeline-badge'>
                  <i className='fa fa-genderless  fs-1 text-info' />
                </div>
                <div className='timeline-content fw-mormal ps-3'>
                  Walid Ben Ahmed a modifié le client FSR reference 41100001
                </div>
              </div>
              <div className='timeline-item'>
                <div className='timeline-label fw-semibold text-gray-800 fs-6'>
                  <div className='d-flex flex-column'>
                    <span> 01:28</span>
                    <span className='fs-8 text-muted'>12/09/23</span>
                  </div>
                </div>
                <div className='timeline-badge'>
                  <i className='fa fa-genderless  fs-1 text-info' />
                </div>
                <div className='timeline-content fw-mormal ps-3'>
                  Walid Ben Ahmed a créé un client FSR reference 41100001
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='col-sm-6 col-xl-6 mb-xl-10'>
        <div className='card card-xl-stretch mb-xl-8'>
          <div className='card-header border-0 pt-5'>
            <h3 className='card-title align-items-start flex-column'>
              <span className='card-label fw-semibold fs-3 mb-1'>Top 5 products par Quantité</span>
              <span className='text-muted fw-semibold fs-7'>
                Obtenir les meilleurs products par Quantité
              </span>
            </h3>
            <div className='card-toolbar' data-kt-buttons='true' />
          </div>
          <div className='card-body h-400px overflow-auto'>
            <div className='table-responsive'>
              <table className='table table-row-dashed align-middle gs-0 gy-4 my-0'>
                <thead>
                  <tr className='fs-7 fw-semibold text-gray-500 border-bottom-0'>
                    <th className='p-0 w-50px pb-1'>ARTICLES</th>
                    <th className='ps-0 min-w-140px' />
                    <th className='text-end min-w-140px p-0 pb-1'>TOTAL QUANTITÉ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr role='row'>
                    <td>REF-0002</td>
                    <td role='cell'>
                      <div className='text-start d-flex flex-row gap-4 ps-2'>
                        <div className='symbol symbol-50px'>
                          <img src='/media/examples/product/uniform-1.jpg' alt='img' />
                          <div>
                            <span className='svg-icon svg-icon svg-icon-2 symbol-badge badge badge-circle bg-body start-100 top-18 svg-icon-gray-700 text-primary'>
                              <svg
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                                className='mh-50px'
                              >
                                <path
                                  opacity='0.3'
                                  d='M5 8.04999L11.8 11.95V19.85L5 15.85V8.04999Z'
                                  fill='currentColor'
                                ></path>
                                <path
                                  d='M20.1 6.65L12.3 2.15C12 1.95 11.6 1.95 11.3 2.15L3.5 6.65C3.2 6.85 3 7.15 3 7.45V16.45C3 16.75 3.2 17.15 3.5 17.25L11.3 21.75C11.5 21.85 11.6 21.85 11.8 21.85C12 21.85 12.1 21.85 12.3 21.75L20.1 17.25C20.4 17.05 20.6 16.75 20.6 16.45V7.45C20.6 7.15 20.4 6.75 20.1 6.65ZM5 15.85V7.95L11.8 4.05L18.6 7.95L11.8 11.95V19.85L5 15.85Z'
                                  fill='currentColor'
                                ></path>
                              </svg>
                            </span>
                          </div>
                        </div>
                        <div className='d-flex flex-column'>
                          <a
                            className='text-gray-800 text-hover-primary mb-1'
                            href='/product/list/show/0/informations'
                          >
                            Uniform noir
                          </a>
                          <small>
                            <span> SaleSphere Manager</span>
                          </small>
                        </div>
                      </div>
                    </td>
                    <td className='text-end' role='cell'>
                      <div className='badge badge-light-success px-4 py-2'>140: En Stock</div>
                    </td>
                  </tr>
                  <tr role='row'>
                    <td>REF-0003</td>
                    <td role='cell' className=''>
                      <div className='text-start d-flex flex-row gap-4 ps-2'>
                        <div className='symbol symbol-50px'>
                          <img src='/media/examples/product/uniform-2.jpg' alt='img' />
                          <div>
                            <span className='svg-icon svg-icon svg-icon-2 symbol-badge badge badge-circle bg-body start-100 top-18 svg-icon-gray-700 text-primary'>
                              <svg
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                                className='mh-50px'
                              >
                                <path
                                  opacity='0.3'
                                  d='M5 8.04999L11.8 11.95V19.85L5 15.85V8.04999Z'
                                  fill='currentColor'
                                ></path>
                                <path
                                  d='M20.1 6.65L12.3 2.15C12 1.95 11.6 1.95 11.3 2.15L3.5 6.65C3.2 6.85 3 7.15 3 7.45V16.45C3 16.75 3.2 17.15 3.5 17.25L11.3 21.75C11.5 21.85 11.6 21.85 11.8 21.85C12 21.85 12.1 21.85 12.3 21.75L20.1 17.25C20.4 17.05 20.6 16.75 20.6 16.45V7.45C20.6 7.15 20.4 6.75 20.1 6.65ZM5 15.85V7.95L11.8 4.05L18.6 7.95L11.8 11.95V19.85L5 15.85Z'
                                  fill='currentColor'
                                ></path>
                              </svg>
                            </span>
                          </div>
                        </div>
                        <div className='d-flex flex-column'>
                          <a
                            className='text-gray-800 text-hover-primary mb-1'
                            href='/product/list/show/1/informations'
                          >
                            unifrom jaune avec exposant lumineux
                          </a>
                          <small>
                            <span>SaleSphere Manager</span>
                          </small>
                        </div>
                      </div>
                    </td>
                    <td className='text-end' role='cell'>
                      <div className='badge badge-light-success px-4 py-2'>120: En Stock</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div> */}
  </>
)

const DashboardWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle>
      <DashboardPage />
    </>
  )
}

export {DashboardWrapper}
