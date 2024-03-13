// @ts-nocheck

import {FC, useEffect, useRef} from 'react'
import Chart from 'chart.js/auto'
import {TopClientData} from './core/models'
import {getTopClients} from './core/requests'
import {useQuery} from 'react-query'
type Props = {
  data: TopClientData[]
}
const ChartExample: FC<Props> = ({data}) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null)
  const labels: string[] = data.map((item: TopClientData) => item.name)
  const revenues: number[] = data.map((item: TopClientData) => item.revenue)

  useEffect(() => {
    if (chartRef.current) {
      const data = {
        labels: labels,
        datasets: [
          {
            label: 'Revenue',
            data: revenues, // Placeholder data for the last 6 months
            backgroundColor: [
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: ['rgb(255, 205, 86)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)'],
            borderWidth: 1,
          },
        ],
      }

      const config = {
        type: 'bar',
        data: data,
        options: {
          plugins: {
            title: {
              display: true,
              text: 'Client du mois',
              padding: {
                top: 10,
                bottom: 30,
              },
            },
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      }

      const ctx = chartRef.current.getContext('2d')
      if (ctx) {
        const chart = new Chart(ctx, config)

        return () => {
          // Cleanup chart on component unmount
          chart.destroy()
        }
      }
    }
  }, [])

  return <canvas ref={chartRef} />
}

const TopClients = () => {
  const {isFetching, refetch, data} = useQuery(
    `top-clients-dashboard`,
    () => {
      return getTopClients()
    },
    {cacheTime: 0, keepPreviousData: true, refetchOnWindowFocus: false}
  )

  if (data)
    return (
      <div className='card'>
        <div className='card-header border-0 pt-5'>
          <h3 className='card-title align-items-start flex-column'>
            <span className='card-label fw-semibold fs-3 mb-1'>
              Top 3 client par Chiffre d'affaire
            </span>
            <span className='text-muted fw-semibold fs-7'>
              Obtenir les chiffres de vente de clients réalisé les meilleures ventes cette semaine
            </span>
          </h3>
          <div className='card-toolbar' data-kt-buttons='true' />
        </div>
        <div className='card-body'>
          <ChartExample data={data} />{' '}
        </div>{' '}
      </div>
    )

  return <div></div>
}

export default TopClients
