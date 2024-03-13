import {formatDate} from '../../../../../_metronic/helpers'
import {useSupplierResponseData, useSupplierResponseLoading} from '../core/SupplierResponseProvider'

const SupplierInformations = () => {
  const isLoading = useSupplierResponseLoading()
  const supplier = useSupplierResponseData()
  if (isLoading)
    return (
      <div className='row g-4 mt-4 opacity-75'>
        <div className='col-md-6 col-xl-7'>
          <div className='card rounded-4 h-100'>
            <div className='card-body d-flex justify-content-center'>
              <div className='spinner-border text-gray-600' role='status'>
                <span className='sr-only'>Chargement...</span>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-6 col-xl-5'>
          <div className='card rounded-4 h-100'>
            <div className='card-body d-flex justify-content-center'>
              <div className='spinner-border text-gray-600' role='status'>
                <span className='sr-only'>Chargement...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  if (supplier)
    return (
      <div className='row g-4 mt-4'>
        <div className='col-md-6 col-xl-7'>
          <div className='card rounded-4 h-100'>
            <div className='card-header p-6 border-0 pb-2'>
              <div className='card-title d-flex flex-column gap-3 fw-bold'>
                <div className='fs-3'>Coordonnées</div>
                <div className='fs-4 text-primary'>{supplier.name}</div>
              </div>
            </div>
            <div className='card-body px-6 pt-2 d-flex flex-column gap-3'>
              <div className='d-flex flex-column gap-3'>
                <div className='fw-bold fs-6'>Adresse e-mail</div>
                <div className='d-flex align-items-center border rounded-3 gap-3 p-1 text-dark'>
                  <i className='ms-2 fas fa-at fs-6' />
                  <div className='flex-grow-1 fs-7 fw-bold'>{supplier.email || '--'}</div>
                  <a
                    className='btn btn-primary btn-icon h-30px w-30px'
                    href={`mailto:${supplier.email}`}
                  >
                    <span className='svg-icon svg-icon-6'>
                      <svg
                        width={14}
                        height={14}
                        viewBox='0 0 14 14'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className='mh-50px'
                      >
                        <path
                          d='M13.3336 6.40011L1.4003 0.400113C0.800299 0.133447 0.133633 0.66678 0.400299 1.26678L2.06697 5.73345L9.66697 7.00011L2.06697 8.26678L0.400299 12.7334C0.200299 13.3334 0.800299 13.8668 1.4003 13.5334L13.3336 7.53345C13.8003 7.33345 13.8003 6.66678 13.3336 6.40011Z'
                          fill='currentColor'
                        />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>

              <div className='fs-6 fw-bold'>Numéros de téléphone</div>
              <div className='d-flex flex-column gap-3'>
                {supplier.phone ? (
                  <div className='d-flex gap-3 align-items-center p-1 border rounded-3'>
                    <i className='fas fa-phone-alt fs-6 ms-2 fw-bolder' />
                    <div className='w-15px'>
                      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'>
                        <path fill='#D80027' d='M0 85.331h512v341.337H0z' />
                        <circle fill='#FFF' cx={256} cy='255.994' r={96} />
                        <g fill='#D80027'>
                          <path d='m267.826 219.291 16.47 22.695 26.673-8.649-16.496 22.676 16.468 22.695-26.664-8.681-16.495 22.676.017-28.04-26.664-8.682 26.674-8.648z'></path>
                          <path d='M277.818 312.724c-31.33 0-56.727-25.397-56.727-56.727s25.397-56.727 56.727-56.727c9.769 0 18.96 2.47 26.985 6.819-12.589-12.31-29.804-19.909-48.803-19.909-38.558 0-69.818 31.259-69.818 69.818s31.26 69.818 69.818 69.818c18.999 0 36.215-7.599 48.803-19.909-8.026 4.347-17.216 6.817-26.985 6.817z'></path>
                        </g>
                      </svg>
                    </div>
                    <div className='flex-grow-1 fs-7 fw-bold'>
                      <div className='d-inline-block' style={{direction: 'ltr'}}>
                        {supplier.phone}
                      </div>
                    </div>

                    <a
                      className='btn btn-success btn-icon h-30px w-30px'
                      target='_self'
                      href={'tel:' + supplier.phone}
                    >
                      <i className='fas fa-phone-alt fs-6' />
                    </a>
                  </div>
                ) : (
                  <div className='d-flex gap-3 align-items-center p-1 border rounded-3'>
                    <i className='fas fa-phone-alt fs-6 ms-2 fw-bolder' />
                    <div className='w-15px'>
                      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'>
                        <path fill='#D80027' d='M0 85.331h512v341.337H0z' />
                        <circle fill='#FFF' cx={256} cy='255.994' r={96} />
                        <g fill='#D80027'>
                          <path d='m267.826 219.291 16.47 22.695 26.673-8.649-16.496 22.676 16.468 22.695-26.664-8.681-16.495 22.676.017-28.04-26.664-8.682 26.674-8.648z'></path>
                          <path d='M277.818 312.724c-31.33 0-56.727-25.397-56.727-56.727s25.397-56.727 56.727-56.727c9.769 0 18.96 2.47 26.985 6.819-12.589-12.31-29.804-19.909-48.803-19.909-38.558 0-69.818 31.259-69.818 69.818s31.26 69.818 69.818 69.818c18.999 0 36.215-7.599 48.803-19.909-8.026 4.347-17.216 6.817-26.985 6.817z'></path>
                        </g>
                      </svg>
                    </div>
                    <div className='flex-grow-1 fs-7 fw-bold'>
                      <div className='d-inline-block' style={{direction: 'ltr'}}>
                        --
                      </div>
                    </div>

                    <div className='btn btn-success btn-icon h-30px w-30px'>
                      <i className='fas fa-phone-alt fs-6' />
                    </div>
                  </div>
                )}
                {supplier.mobile && (
                  <div className='d-flex gap-3 align-items-center p-1 border rounded-3'>
                    <i className='fas fa-phone-alt fs-6 ms-2 fw-bolder' />
                    <div className='w-15px'>
                      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'>
                        <path fill='#D80027' d='M0 85.331h512v341.337H0z' />
                        <circle fill='#FFF' cx={256} cy='255.994' r={96} />
                        <g fill='#D80027'>
                          <path d='m267.826 219.291 16.47 22.695 26.673-8.649-16.496 22.676 16.468 22.695-26.664-8.681-16.495 22.676.017-28.04-26.664-8.682 26.674-8.648z'></path>
                          <path d='M277.818 312.724c-31.33 0-56.727-25.397-56.727-56.727s25.397-56.727 56.727-56.727c9.769 0 18.96 2.47 26.985 6.819-12.589-12.31-29.804-19.909-48.803-19.909-38.558 0-69.818 31.259-69.818 69.818s31.26 69.818 69.818 69.818c18.999 0 36.215-7.599 48.803-19.909-8.026 4.347-17.216 6.817-26.985 6.817z'></path>
                        </g>
                      </svg>
                    </div>
                    <div className='flex-grow-1 fs-7 fw-bold'>
                      <div className='d-inline-block' style={{direction: 'ltr'}}>
                        {supplier.mobile}
                      </div>
                    </div>

                    <a
                      className='btn btn-success btn-icon h-30px w-30px'
                      target='_self'
                      href={'tel:' + supplier.mobile}
                    >
                      <i className='fas fa-phone-alt fs-6' />
                    </a>
                  </div>
                )}

                <div className='fs-6 fw-bold'>Adresse</div>
                <div className='d-flex gap-3 align-items-center p-1 border rounded-3 h-40px'>
                  <i className='fas fa-location-dot fs-6 ms-2 fw-bolder' />

                  <div className='flex-grow-1 fs-7 fw-bold '>
                    <div className='d-inline-block' style={{direction: 'ltr'}}>
                      {supplier.address}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className='col-6'>
              <div className='card rounded-4'>
                <div className='card-body'>
                  <div className='d-flex justify-content-between'>
                    <div className='d-flex align-items-center'>
                      <div className='symbol symbol-40px me-5'>
                        <span className='symbol-label fs-2 fw-bold' />
                      </div>
                      <div className='fw-semibold text-muted fs-4'>Dettes impayées</div>
                    </div>
                  </div>
                  <div className='pt-20'>
                    <div className='h1 fw-bold h1 pt-10'>--</div>
                  </div>
                  <div>
                    <b className='text-danger text-bolder'>
                      <i className='fa-light fa-arrow-down-left text-danger bold' />
                      --%
                    </b>
                  </div>
                </div>
              </div>
            </div> */}
          {/* <div className='col-6'>
              <div className='card rounded-4'>
                <div className='card-body'>
                  <div className='fs-1 fw-bold'>0</div>
                  <div className='text-muted fw-semibold fs-5'>Total des factures</div>
                  <div className='d-flex justify-content-between pt-6'>
                    <div className='fw-semibold text-gray-700'>Factures impayées</div>
                    <div className='fw-bold fs-4 '>0</div>
                  </div>
                  <div className='separator border-2 separator-dashed' />
                  <div className='d-flex justify-content-between pt-6'>
                    <div className='fw-semibold text-gray-700'>Factures payées</div>
                    <div className='fw-bold fs-4 '>0</div>
                  </div>
                  <div className='separator border-2 separator-dashed' />
                  <div className='d-flex justify-content-between pt-6'>
                    <div className='fw-semibold text-gray-700'>Factures partiellement payées</div>
                    <div className='fw-bold fs-4 '>0</div>
                  </div>
                </div>
              </div>
            </div> */}
        </div>
        <div className='col-md-6 col-xl-5 d-flex flex-column gap-4'>
          <div className='card rounded-4 h-100'>
            <div className='card-header p-6 border-0'>
              <div className='card-title d-flex flex-column fw-bold'>
                <div className='fs-3'>Plus de détails</div>
              </div>
            </div>
            <div className='card-body px-6 pt-0'>
              <div className='d-flex flex-column align-items-start pt-4'>
                <div className='d-flex align-items-center p-2'>
                  <span className='bullet bullet-vertical h-40px bg-primary' />

                  <div className='mx-2 flex-grow-1'>
                    <span className='text-muted fw-semibold fs-6'>Matricule fiscal</span>
                    <span className='text-gray-800 text-hover-primary fw-bold d-block'>
                      {supplier.taxNumber || '--'}
                    </span>
                  </div>
                </div>
                <div className='d-flex align-items-center p-2'>
                  <span className='bullet bullet-vertical h-40px bg-primary' />
                  <div className='mx-2 flex-grow-1'>
                    <span className='text-muted fw-semibold fs-6'>Registre de commerce</span>
                    <span className='text-gray-800 text-hover-primary fw-bold d-block'>
                      {supplier.register || '--'}
                    </span>
                  </div>
                </div>
                <div className='d-flex align-items-center p-2'>
                  <span className='bullet bullet-vertical h-40px bg-primary' />
                  <div className='mx-2 flex-grow-1'>
                    <span className='text-muted fw-semibold fs-6'>Site web</span>
                    <span className='text-gray-800 text-hover-primary fw-bold d-block'>
                      {supplier.website ? (
                        <a
                          className='link'
                          target='_blank'
                          href={'https://' + supplier.website}
                          rel='noreferrer'
                        >
                          {supplier.website}
                        </a>
                      ) : (
                        '--'
                      )}
                    </span>
                  </div>
                </div>
                <div className='d-flex align-items-center p-2'>
                  <span className='bullet bullet-vertical h-40px bg-primary' />
                  <div className='mx-2 flex-grow-1'>
                    <span className='text-muted fw-semibold fs-6'>Date de creation</span>
                    <span className='text-gray-800 text-hover-primary fw-bold d-block'>
                      {formatDate(supplier.createdAt) || '--'}
                    </span>
                  </div>
                </div>
                <div className='d-flex align-items-center p-2'>
                  <span className='bullet bullet-vertical h-40px bg-primary' />
                  <div className='mx-2 flex-grow-1'>
                    <span className='text-muted fw-semibold fs-6'>Statut</span>
                    <span className='text-gray-800 text-hover-primary fw-bold d-block'>
                      {supplier.isArchived ? 'Archivé' : 'Activé'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className='card rounded-4'>
            <div className='card-header p-6 border-0 pb-2'>
              <div className='card-title fw-bold fs-3 text-capitalize'>Adresse</div>
            </div>
            <div className='card-body d-flex flex-column align-items-start p-6'>
              <div className='h1 fs-6 text-gray-800 pt-6'>Adresse de livraison</div>
              <div className='d-flex gap-3 align-items-center w-100'>
                <div className='d-flex flex-column gap-2 flex-grow-1'>
                  <span>Rue l'indepandance appartement JSST, 1 ere Etage, numero 2, Jandouba</span>
                  <span>9999,Tunisie</span>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    )
  return <div></div>
}

export default SupplierInformations
