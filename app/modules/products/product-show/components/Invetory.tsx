import {FC} from 'react'
import {Icon, SVG, toAbsoluteUrl} from '../../../../../_metronic/helpers'

const Invetory: FC = () => {
  return (
    <>
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
                    className='text-success mw-50px'
                  />
                </span>
              </span>
            </div>
            <div className='d-flex flex-column gap-1'>
              <div className='text-muted fs-5'>État de stock</div>
              <div className='d-flex gap-2 align-items-center'>
                <div className='fs-3 fw-bold'>
                  <span className='fs-3'>0</span>
                </div>
                <div className='badge fs-3'>En stock</div>
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
      <div className='card'>
        <div className='card-body'>
          <div className='table-responsive'>
            <table className='table sw-table'>
              <thead>
                <tr className='text-center text-gray-400 fw-bold fs-7 text-uppercase text-truncate'>
                  <th className='text-start ps-4'>Date</th>
                  <th className=''>Document</th>
                  <th className=''>État</th>
                  <th className=''>Contact</th>
                  <th className=''>Utilisateur</th>
                  <th className=''>Quantité entrante</th>
                  <th className=''>Quantité sortante</th>
                  <th className=''>En stock</th>
                  <th className=''>Entrepôt</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
          <div className='h-150px d-flex align-items-center justify-content-center'>
            <div className='fs-3 text-center align-middle text-gray-700'>
              Il n'y a pas de données à afficher
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Invetory
