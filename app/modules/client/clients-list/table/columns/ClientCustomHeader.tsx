import clsx from 'clsx'
import {FC, PropsWithChildren, useMemo} from 'react'
import {HeaderProps} from 'react-table'
import {initialQueryState} from '../../core/_init'
import {useQueryRequest} from '../../core/QueryRequestProvider'
import {Client} from '../../../core/_models'

type Props = {
  className?: string
  title?: string
  tableProps: PropsWithChildren<HeaderProps<Client>>
}
const ClientCustomHeader: FC<Props> = ({className, title, tableProps}) => {
  const id = tableProps.column.id
  const {state, updateState} = useQueryRequest()

  const isSelectedForSorting = useMemo(() => {
    return state.sort && state.sort === id
  }, [state, id])
  const order: 'asc' | 'desc' | undefined = useMemo(() => state.order, [state])

  const sortColumn = () => {
    // avoid sorting for these columns
    if (id === 'actions' || id === 'contact' || id === 'sales') {
      return
    }

    if (!isSelectedForSorting) {
      // enable sort asc
      updateState({sort: id, order: 'asc', ...initialQueryState})
      return
    }

    if (isSelectedForSorting && order !== undefined) {
      if (order === 'asc') {
        // enable sort desc
        updateState({sort: id, order: 'desc', ...initialQueryState})
        return
      }

      // disable sort
      updateState({sort: undefined, order: undefined, ...initialQueryState})
    }
  }

  return (
    <th
      {...tableProps.column.getHeaderProps()}
      className={clsx(
        className,
        isSelectedForSorting && order !== undefined && `table-sort-${order}`
      )}
      style={{cursor: 'pointer'}}
      onClick={sortColumn}
    >
      {title}
    </th>
  )
}

export {ClientCustomHeader}
