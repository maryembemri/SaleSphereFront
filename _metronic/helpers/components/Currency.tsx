import {FC} from 'react'

type CurrencyProps = {
  value?: number
  decimal?: number
  className?: string
}

const Currency: FC<CurrencyProps> = ({value, decimal, className}) => {
  if (!value) return <span className={className}>0</span>
  // Format the value as a currency string with space as the thousands separator and decimal places
  const formattedValue = new Intl.NumberFormat('fr-FR', {
    currencyDisplay: 'code', // Display currency symbol as code (TND)
    minimumFractionDigits: decimal || 3,
  }).format(value)

  return <span className={className}>{formattedValue}</span>
}

export {Currency}
