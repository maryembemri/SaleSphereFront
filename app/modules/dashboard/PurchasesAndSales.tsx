// @ts-nocheck
import React, {FC, useEffect, useRef} from 'react'
import Chart from 'chart.js/auto'
import {getTotalsPerMonth} from './core/requests'
import {QUERIES} from '../../../_metronic/helpers'
import {TotalsPerMonthDashboard} from './core/models'
import {useQuery} from 'react-query'

const ChartExample: FC<TotalsPerMonthDashboard> = ({months, totalSales, totalPurchases}) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    if (chartRef.current) {
      const labels = months // Replace with your actual labels
      const data = {
        labels: labels,
        datasets: [
          {
            label: 'Achat',
            data: totalPurchases, // Placeholder data for the last 6 months
            fill: false,
            borderColor: 'rgb(217, 83, 79)',
            tension: 0.1,
          },
          {
            label: 'Vente',
            data: totalSales, // Placeholder data for the last 6 months
            fill: false,
            borderColor: 'rgb(92, 184, 92)',
            tension: 0.1,
          },
        ],
      }

      const config = {
        type: 'line', // Set the chart type to 'line'
        data: data,
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

const PurchasesAndSales = () => {
  const {isFetching, refetch, data} = useQuery(
    `sales-purchases-dashboard`,
    () => {
      return getTotalsPerMonth()
    },
    {cacheTime: 0, keepPreviousData: true, refetchOnWindowFocus: false}
  )

  if (data)
    return (
      <div className='card'>
        <div className='card-header border-0 pt-5'>
          <h3 className='card-title align-items-start flex-column'>
            <span className='card-label fw-semibold fs-3 mb-1'>
              Achats et ventes de cartes graphiques
            </span>
            <span className='text-muted fw-semibold fs-7'>
              Obtenir les détails de l'achat et de la vente pour la période de 6 mois
            </span>
          </h3>
          <div className='card-toolbar' data-kt-buttons='true' />
        </div>
        <div className='card-body'>
          <ChartExample
            months={data.months}
            totalSales={data.totalSales}
            totalPurchases={data.totalPurchases}
          />
        </div>
      </div>
    )

  return <div></div>
}

export default PurchasesAndSales
