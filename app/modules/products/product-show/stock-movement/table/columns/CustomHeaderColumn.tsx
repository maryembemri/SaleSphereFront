// @ts-nocheck
import {FC} from 'react'
import {ColumnInstance} from 'react-table'
import {StockMovement} from '../../core/_init'

type Props = {
  column: ColumnInstance<StockMovement>
}

const CustomHeaderColumn: FC<Props> = ({column}) => (
  <>
    {column.Header && typeof column.Header === 'string' ? (
      <th {...column.getHeaderProps()}>{column.render('Header')}</th>
    ) : (
      column.render('Header')
    )}
  </>
)

export {CustomHeaderColumn}
