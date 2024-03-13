import React, {FC} from 'react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Company} from '../_model'
// import {toAbsoluteUrl} from '../../../../../_metronic/helpers'
// import {useQuery} from 'react-query'
// import {getCompany} from '../core/requests'

interface Props {
  company: Company
}

const CompanyDisplay: FC<Props> = ({company}) => {
  return (
    <>
      <div className='card-body pb-0 pt-5'>
        <div className='w-100 text-center'>
          <div className='row mb-5'>
            <div className='col'>
              <label className='form-label text-gray-500'>Nom de l'entreprise</label>
              <div className='form-control form-control-lg border-0 px-0'>
                {company.name || '--'}
              </div>
              <div className='text-danger mt-2' />
            </div>
            <div className='col'>
              <label className='form-label text-gray-500'>Matricule Fiscale</label>
              <div className='form-control form-control-lg border-0 px-0'>
                {company.taxId || '--'}
              </div>
              <div className='text-danger mt-2' />
            </div>
            <div className='col'>
              <label className='form-label text-gray-500'>Devise</label>
              <div className='form-control form-control-lg border-0 px-0'>
                {company.currency || '--'}
              </div>
              <div className='text-danger mt-2' />
            </div>
          </div>
        </div>
      </div>

      <div className='card-body py-0'>
        <div className='row mb-10'>
          <div className='col'>
            <label className='form-label text-gray-500'>Email</label>
            <div className='form-control form-control-lg border-0 px-0'>
              {company.email || '--'}
            </div>
            <div className='text-danger mt-2' />
          </div>

          <div className='col'>
            <label className='form-label text-gray-500'>N° Mobile</label>
            <div className='form-control form-control-lg border-0 px-0'>
              {company.mobile || '--'}
            </div>
            <div className='text-danger mt-2' />
          </div>
          <div className='col'>
            <label className='form-label text-gray-500'>Telephone</label>
            <div className='form-control form-control-lg border-0 px-0'>
              {company.phone || '--'}
            </div>
            <div className='text-danger mt-2' />
          </div>

          <div className='col'>
            <label className='form-label text-gray-500'>Adresse</label>
            <div className='form-control form-control-lg border-0 px-0'>
              {company.address || '--'}
            </div>
          </div>
        </div>
        {/* dd */}
      </div>
    </>
  )
}

export default CompanyDisplay
