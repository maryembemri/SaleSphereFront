import React, {FC} from 'react'
import {Currency, QUERIES, SVG, toAbsoluteUrl} from '../../../_metronic/helpers'
import {useQuery} from 'react-query'
import {getSalesDashboard} from './core/requests'

type Props = {
  value: number
  title: string
  progress: number
}

const SalesCard: FC<Props> = ({value, title, progress}) => {
  const color = progress > 0 ? 'success' : progress < 0 ? 'danger' : 'secondary'

  const path =
    progress > 0
      ? toAbsoluteUrl('/media/icons/duotune/arrows/arr056.svg')
      : progress < 0
      ? toAbsoluteUrl('/media/icons/duotune/arrows/arr057.svg')
      : ''

  return (
    <div className='col-sm-6 col-md-4 mb-xl-10'>
      <div className='card'>
        <div className='card-body d-flex justify-content-between align-items-start '>
          <div className='d-flex flex-column my-7'>
            <div className='d-flex gap-1 align-items-center'>
              <Currency className='fw-semibold  text-gray-800 lh-1 ls-n2 fs-2x' value={value} />
              <sup className='fs-5 text-muted fw-bold'>TND</sup>
            </div>
            <div className='m-0'>
              <span className='fw-semibold fs-6 text-gray-400'>{title}</span>
            </div>
          </div>
          <span className={`badge badge-light-${color} fs-base`}>
            <SVG className={`svg-icon-1 svg-icon-${color} ms-n1`} path={path} />
            {Math.trunc(progress || 0)}%
          </span>
        </div>
      </div>
    </div>
  )
}

const SalesDashboardSection = () => {
  const {isFetching, refetch, data} = useQuery(
    `${QUERIES.SALES_DASHBOARD}`,
    () => {
      return getSalesDashboard()
    },
    {cacheTime: 0, keepPreviousData: true, refetchOnWindowFocus: false}
  )

  if (data)
    return (
      <section className='row gy-3 g-xl-3  gx-xl-10'>
        <SalesCard
          value={data?.salesWeek || 0}
          title={'Ventes cette semaine'}
          progress={data?.progressWeek || 0}
        />
        <SalesCard
          value={data?.salesMonth || 0}
          title={'Ventes ce mois-ci'}
          progress={data?.progressMonth || 0}
        />
        <SalesCard
          value={data?.salesYear || 0}
          title={'Ventes cette année'}
          progress={data?.progressYear || 0}
        />
      </section>
    )

  return <div></div>
}

export default SalesDashboardSection
