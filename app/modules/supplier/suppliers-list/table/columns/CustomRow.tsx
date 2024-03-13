// @ts-nocheck
import clsx from 'clsx'
import {FC} from 'react'
import {Row} from 'react-table'
import {Supplier} from '../core/models'

type Props = {
  row: Row<Supplier>
}

const CustomRow: FC<Props> = ({row}) => (
  <tr {...row.getRowProps()}>
    {row.cells.map((cell) => {
      return (
        <td
          {...cell.getCellProps()}
          className={clsx({'text-end min-w-25px': cell.column.id === 'actions'})}
        >
          {cell.render('Cell')}
        </td>
      )
    })}
  </tr>
)

export {CustomRow}
