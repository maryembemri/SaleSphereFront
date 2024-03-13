/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {Link} from 'react-router-dom'
import {useLocation} from 'react-router'
import {Fail, Success, toAbsoluteUrl} from '../../../../_metronic/helpers'
import {
  useProductResponseLoading,
  useProductResponseData,
  useProductResponse,
} from './core/ProductResponseProvider'
import Swal from 'sweetalert2'
import {archiveProduct} from '../core/requests'
import {Product} from '../core/models'

const ProductShowHeader: FC = () => {
  const location = useLocation()
  const {refetch} = useProductResponse()
  const isLoading = useProductResponseLoading()
  const product = useProductResponseData()

  const handleArchive = () => {
    if (product)
      Swal.fire({
        title: 'Êtes-vous sûr ?',
        text: product.isArchived
          ? 'Souhaitez-vous activer ce product ?'
          : 'Souhaitez-vous archiver ce product ?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: product.isArchived ? 'Oui, activer' : 'Oui, archiver',
        cancelButtonText: 'Non, annulez!',
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger',
        },
        buttonsStyling: false,
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            await archiveProduct(product.id, !product.isArchived)

            Success.fire({
              title: product.isArchived ? 'Product activé' : 'Product archivé!',
              text: product.isArchived
                ? `Le product ${product.code} est activé`
                : `Le product ${product.code} est archivé`,
            }).then(async (result) => {
              refetch()
            })
          } catch (error: any) {
            console.log(error)
            Fail.fire({
              title: 'Error!',
              text: error.message,
            })
          }
        }
      })
  }

  const productImageSrc =
    product?.category.name.toLocaleLowerCase() === 'logo'
      ? toAbsoluteUrl('/media/svg/product/symbol-svgrepo-com.svg')
      : product?.category.name.toLocaleLowerCase() === 'tissu'
      ? toAbsoluteUrl('/media/svg/product/fabric-material-svgrepo-com.svg')
      : product?.category.name.toLocaleLowerCase() === 'garniture'
      ? toAbsoluteUrl('/media/svg/product/sleeve-material-svgrepo-com.svg')
      : product?.category.name.toLocaleLowerCase() === 'fermeture'
      ? toAbsoluteUrl('/media/svg/product/zipper-material-svgrepo-com.svg')
      : product?.category.name.toLocaleLowerCase() === 'manche'
      ? toAbsoluteUrl('/media/svg/product/scarf-clothes-svgrepo-com.svg')
      : toAbsoluteUrl('/media/svg/product/ball-of-wool-fashion-svgrepo-com.svg')

  // Use a regular expression to match the pattern
  const isInformationActive = /^\/product\/list\/show\/\d+\/informations$/.test(location.pathname)
  const isStockActive = /^\/product\/list\/show\/\d+\/stock$/.test(location.pathname)

  if (isLoading)
    return (
      <div className='card mb-5 mb-xl-10'>
        <div className='card-body ribbon ribbon-end pt-9 pb-0'>
          <div className='ribbon-label bg-primary top-25'>--</div>
          <div className='d-flex flex-column flex-md-row  justify-content-between'>
            <div className='d-flex align-items-end gap-3 mb-4 mb-md-0 w-100'>
              <div className='symbol symbol-125px mb-3'>
                <img src={toAbsoluteUrl('/media/examples/product/placeholder.jpg')} alt='img' />
              </div>
              <div className='d-flex flex-column gap-3 h-100 flex-fill justify-content-center'>
                <div className='text-center fw-bold fs-1'>
                  <div className='spinner-border text-gray-600' role='status'>
                    <span className='sr-only'>Chargement...</span>
                  </div>
                  <span className='text-gray-600 ms-2'>Chargement...</span>
                </div>
              </div>
            </div>
          </div>
          <div className='separator mt-5'></div>
          <div className='d-flex justify-content-between overflow-auto  h-50px'>
            <ul className='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-6 fw-bolder flex-nowrap'>
              <li className='nav-item'>
                <Link
                  className={
                    `nav-link text-active-primary me-6 disabled ` +
                    (isInformationActive && 'active')
                  }
                  to={`/article/list/show/0/informations`}
                >
                  Informations
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={
                    `nav-link text-active-primary me-6 disabled ` + (isStockActive && 'active')
                  }
                  to={`/article/list/show/0/stock`}
                >
                  Mouvement de stock
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )

  if (product)
    return (
      <div className='card mb-5 mb-xl-10'>
        <div className='card-body ribbon ribbon-end pt-9 pb-0'>
          <div className='ribbon-label bg-primary top-25'>{product.category.name}</div>
          <div className='d-flex flex-column flex-md-row  justify-content-between'>
            <div className='d-flex align-items-end gap-3 mb-4 mb-md-0 w-100'>
              <div className='symbol symbol-125px mb-3'>
                <img src={productImageSrc} alt='img' />
              </div>
              <div className='d-flex flex-column gap-3 h-100 flex-fill'>
                <div className=' fw-bold fs-1'>{product.label}</div>
                {/* <div className='d-flex gap-2 fw-bold'>
                  <div className='text-gray-400 fs-4'>
                    Code : &nbsp;<span className='text-gray-800'>{product.code}</span>
                  </div>
                  <div className='text-gray-400 fs-3'>
                    Catégorie : &nbsp;<span className='text-gray-800'>{product.category.name}</span>
                  </div>
                  <div className='text-gray-400 fs-3'>
                    Prix public : &nbsp;
                    <Currency className='text-gray-800' value={product.price || 0} />
                    <sup className='fs-7 text-muted fw-semibold ms-1'>TND</sup>
                  </div>
                </div> */}
                <div className='d-flex flex-wrap flex-stack'>
                  <div className='d-flex flex-column flex-grow-1 pe-8'>
                    <div className='d-flex flex-wrap'>
                      {product.color?.label && (
                        <div className='border border-gray-300 border-dashed rounded min-w-125px py-2 px-4 me-3 mb-3'>
                          <div className='fw-bold fs-7 text-gray-400'>Couleur</div>
                          <div className='separator my-1' />

                          <div className='fs-6 fw-bold d-flex'>
                            <i
                              className='fa fa-genderless fs-1 me-2 '
                              style={{
                                color: product.color ? '#' + product.color?.hexCode : '#B8B8B8',
                              }}
                            />
                            {product.color.label.toUpperCase()}
                          </div>
                        </div>
                      )}

                      {product.unit.label && (
                        <div className='border border-gray-300 border-dashed rounded min-w-125px py-2 px-4 me-3 mb-3'>
                          <div className='fw-bold fs-7 text-gray-400'>Unité</div>
                          <div className='separator my-1' />

                          <div className='fs-6 fw-bold d-flex'>
                            {product.unit.label.toUpperCase()}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='separator mt-5'></div>
          <div className='d-flex justify-content-between overflow-auto  h-50px'>
            <ul className='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-6 fw-bolder flex-nowrap'>
              <li className='nav-item'>
                <Link
                  className={
                    `nav-link text-active-primary me-6 ` + (isInformationActive && 'active')
                  }
                  to={`/product/list/show/${product.id}/informations`}
                >
                  Informations
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={`nav-link text-active-primary me-6 ` + (isStockActive && 'active')}
                  to={`/product/list/show/${product.id}/stock`}
                >
                  Mouvement de stock
                </Link>
              </li>
            </ul>
            <ul className='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-6 fw-bolder flex-nowrap'>
              <li className='nav-item nav-link border-bottom-0 link link-secondary cursor-pointer'>
                {product.isArchived ? (
                  <span onClick={handleArchive} className='text-hover-success'>
                    Activer
                  </span>
                ) : (
                  <span onClick={handleArchive} className='text-hover-danger'>
                    Archiver
                  </span>
                )}
              </li>
              <li className='nav-item'>
                <Link
                  className='nav-link border-bottom-0 link-secondary text-hover-primary'
                  to={'/product/list/edit/' + product.id}
                >
                  Modifier
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )

  return null
}

export {ProductShowHeader}
