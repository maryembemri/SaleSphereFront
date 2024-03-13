import {FC} from 'react'

type Props = {
  tax?: any
}

const ProductTaxCell: FC<Props> = ({tax}) => {
  if (tax)
    return (
      <div className='badge badge-secondary fw-bolder'>
        {tax?.sign + parseInt(String(tax?.value * 100)) + '%' || '--'}
      </div>
    )

  return <div>--</div>
}
export {ProductTaxCell}
