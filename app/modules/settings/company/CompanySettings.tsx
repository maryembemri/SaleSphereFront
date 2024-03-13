import React, {FC, useEffect, useState} from 'react'
import {toAbsoluteUrl} from '../../../../_metronic/helpers'
import {Company, company} from './_model'
import CompanyForm from './components/CompanyForm'
import CompanyDisplay from './components/CompanyDisplay'
import Avatar from './components/Avatar'
import {useQuery} from 'react-query'
import {getCompany} from './core/requests'

const CompanySettings: FC = () => {
  const {
    isFetching,
    refetch,
    data: company,
  } = useQuery(
    'company',
    () => {
      return getCompany()
    },
    {cacheTime: 0, keepPreviousData: true, refetchOnWindowFocus: false}
  )

  const [isForm, setForm] = useState<boolean>(false)

  const blankImg = toAbsoluteUrl('/media/svg/avatars/blank.svg')

  return (
    <div className='card w-100'>
      <div className='card-header'>
        <h2 className='card-title'>Paramètres de l'entreprise</h2>
      </div>
      {company && (
        <>
          <Avatar blankImg={blankImg} userAvatarImg={blankImg} />

          <div className='card-header'>
            <h4 className='card-title text-gray-600'>Intformations Generale</h4>
            <div className='card-toolbar'>
              <button
                onClick={() => setForm(true)}
                disabled={isForm}
                className='btn btn-sm btn-success'
              >
                <i className='bi bi-pencil-square'></i>Modifier
              </button>
            </div>
          </div>
          {isForm ? (
            <CompanyForm company={company} onRefetch={refetch} setForm={setForm} />
          ) : (
            <CompanyDisplay company={company} />
          )}
        </>
      )}
    </div>
  )
}

export default CompanySettings
