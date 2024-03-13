// @ts-nocheck
import React, {FC, useEffect, useRef} from 'react'
import Chart from 'chart.js/auto'
import {TopProductSoldData} from './core/models'
import {getTopProducts} from './core/requests'
import {useQuery} from 'react-query'
type Props = {
  data: TopProductSoldData[]
}
const ChartExample: FC<Props> = ({data}) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null)
  const labels: string[] = data.map((item: TopProductSoldData) => item.product.title)
  const quantities: number[] = data.map((item: TopProductSoldData) => item.quantity)

  useEffect(() => {
    if (chartRef.current) {
      const data = {
        labels: labels,
        datasets: [
          {
            label: 'Quantité',
            data: quantities, // Placeholder data for the last 6 months
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(201, 203, 207, 0.2)',
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
              'rgb(201, 203, 207)',
            ],
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
              text: 'Product du mois',
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

const TopProductsSold = () => {
  const {isFetching, refetch, data} = useQuery(
    `top-products-dashboard`,
    () => {
      return getTopProducts()
    },
    {cacheTime: 0, keepPreviousData: true, refetchOnWindowFocus: false}
  )

  if (data)
    return (
      <div className='card'>
        <div className='card-header border-0 pt-5'>
          <h3 className='card-title align-items-start flex-column'>
            <span className='card-label fw-semibold fs-3 mb-1'>
              Les 6 products les plus vendus ce mois
            </span>
            <span className='text-muted fw-semibold fs-7'>
              Obtenir les détails des 6 products les plus vendus ce mois
            </span>
          </h3>
          <div className='card-toolbar' data-kt-buttons='true' />
        </div>
        <div className='card-body'>
          <ChartExample data={data.data} />{' '}
        </div>{' '}
      </div>
    )

  return <div></div>
}

export default TopProductsSold
