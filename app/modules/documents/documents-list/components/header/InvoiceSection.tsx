import React from 'react'
import {getLogistics} from '../../../core/requests'
import {useQuery} from 'react-query'
import {Currency} from '../../../../../../_metronic/helpers'
import {useQueryRequest} from '../../core/QueryRequestProvider'

const InvoiceSection = () => {
  const {state} = useQueryRequest()
  const code = state.code
  console.log(code)

  const {isFetching, refetch, data} = useQuery(
    `logistic-${code}`,
    () => {
      return getLogistics(code)
    },
    {cacheTime: 0, keepPreviousData: true, refetchOnWindowFocus: false}
  )

  if (isFetching) <div>Loading</div>

  return (
    <div className='card card-flush h-100 mb-4 h-lg-100'>
      <div className='card-header'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold text-dark'>Informations logistiques</span>
        </h3>
      </div>
      <div className='card-body d-flex flex-wrap gap-3 justify-content-between align-items-start pb-8 pt-1  '>
        <div className='d-flex align-items-center me-2'>
          <div className='symbol symbol-70px me-3'>
            <div className='symbol-label bg-light-primary '>
              <span className='svg-icon svg-icon svg-icon-1 svg-icon-primary '>
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
                    d='M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z'
                    fill='currentColor'
                  ></path>
                  <path
                    d='M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z'
                    fill='currentColor'
                  ></path>
                </svg>
              </span>
            </div>
          </div>
          <div>
            <div className='fs-5 text-muted fw-semibold '>Total</div>
            <div className='d-flex'>
              <div className=''>
                <span className='fs-4 text-gray-800 text-hover-primary fw-bold pe-2'>
                  {data && <Currency value={data.totalTotal} />}
                </span>
                <sup className='fs-8 text-muted fw-semibold pe-2'>TND</sup>
              </div>
              TTC
            </div>
            <div className='d-flex'>
              <div className=''>
                <span className='fs-5 text-muted fw-semibold pe-2'>
                  {data && <Currency value={data.totalSubtotal} />}
                </span>
                <sup className='fs-8 text-muted fw-semibold pe-2'>TND</sup>
              </div>
              HT
            </div>
          </div>
        </div>
        <div className='d-flex align-items-center me-2'>
          <div className='symbol symbol-70px me-3'>
            <div className='symbol-label bg-light-danger '>
              <span className='svg-icon svg-icon svg-icon-1 svg-icon-danger '>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='mh-50px'
                >
                  <path
                    d='M13 14.4V3C13 2.4 12.6 2 12 2C11.4 2 11 2.4 11 3V14.4H13Z'
                    fill='currentColor'
                  ></path>
                  <path
                    opacity='0.3'
                    d='M4 14.4H20L12.7 21.7C12.3 22.1 11.7 22.1 11.3 21.7L4 14.4Z'
                    fill='currentColor'
                  ></path>
                </svg>
              </span>
            </div>
          </div>
          <div>
            <div className='fs-5 text-muted fw-semibold '>Factures payées</div>
            <div className='d-flex'>
              <div className=''>
                <span className='fs-4 text-gray-800 text-hover-primary fw-bold pe-2'>0,000</span>
                <sup className='fs-8 text-muted fw-semibold pe-2'>TND</sup>
              </div>
              TTC
            </div>
          </div>
        </div>
        <div className='d-flex align-items-center me-2'>
          <div className='symbol symbol-70px me-3'>
            <div className='symbol-label bg-light-success '>
              <span className='svg-icon svg-icon svg-icon-1 svg-icon-success '>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='mh-50px'
                >
                  <path
                    d='M13 9.59998V21C13 21.6 12.6 22 12 22C11.4 22 11 21.6 11 21V9.59998H13Z'
                    fill='currentColor'
                  ></path>
                  <path
                    opacity='0.3'
                    d='M4 9.60002H20L12.7 2.3C12.3 1.9 11.7 1.9 11.3 2.3L4 9.60002Z'
                    fill='currentColor'
                  ></path>
                </svg>
              </span>
            </div>
          </div>
          <div>
            <div className='fs-5 text-muted fw-semibold '>Factures à payer</div>
            <div className='d-flex'>
              <div className=''>
                <span className='fs-4 text-gray-800 text-hover-primary fw-bold pe-2'>0,000</span>
                <sup className='fs-8 text-muted fw-semibold pe-2'>TND</sup>
              </div>
              TTC
            </div>
          </div>
        </div>
        <div className='d-flex align-items-center me-2'>
          <div className='symbol symbol-70px me-3'>
            <div className='symbol-label bg-light-dark '>
              <span className='svg-icon svg-icon svg-icon-1 svg-icon-dark '>
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
                    d='M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z'
                    fill='currentColor'
                  ></path>
                  <path
                    d='M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z'
                    fill='currentColor'
                  ></path>
                </svg>
              </span>
            </div>
          </div>
          <div>
            <div className='fs-5 text-muted fw-semibold '>En retard</div>
            <div className='d-flex'>
              <div className=''>
                <span className='fs-4 text-gray-800 text-hover-primary fw-bold pe-2'>0,000</span>
                <sup className='fs-8 text-muted fw-semibold pe-2'>TND</sup>
              </div>
              TTC
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InvoiceSection
