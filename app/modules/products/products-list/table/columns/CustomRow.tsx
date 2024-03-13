import clsx from 'clsx'
import {FC} from 'react'
import {Row} from 'react-table'
import {Product} from '../../../core/models'

type Props = {
  row: Row<Product>
}

const CustomRow: FC<Props> = ({row}) => (
  <tr {...row.getRowProps()}>
    {row.cells.map((cell) => {
      return (
        <td
          {...cell.getCellProps()}
          className={clsx('py-4 px-6', {'text-end min-w-50px': cell.column.id === 'actions'})}
        >
          {cell.render('Cell')}
        </td>
      )
    })}
  </tr>
)

export {CustomRow}
