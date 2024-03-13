import {useMemo} from 'react'
import {useTable, ColumnInstance, Row} from 'react-table'
import {CustomHeaderColumn} from './columns/CustomHeaderColumn'
import {CustomRow} from './columns/CustomRow'
import {useQueryResponseData, useQueryResponseLoading} from '../core/QueryResponseProvider'
import {suppliersColumns} from './columns/_columns'
import {SuppliersListPagination} from '../components/pagination/SuppliersListPagination'
import {CardBody, Loading} from '../../../../../_metronic/helpers'
import {Supplier} from '../../core/models'

const SuppliersTable = () => {
  const suppliers = useQueryResponseData()
  const isLoading = useQueryResponseLoading()
  const data = useMemo(() => suppliers, [suppliers])
  const columns = useMemo(() => suppliersColumns, [])
  const {getTableProps, getTableBodyProps, headers, rows, prepareRow} = useTable({
    columns,
    data,
  })

  return (
    <CardBody className='py-4'>
      <div className='table-responsive'>
        <table
          id='table_suppliers'
          className='table table-hover align-middle table-row-dashed fs-6 gy-5 dataTable no-footer'
          {...getTableProps()}
        >
          <thead>
            <tr className='text-start text-muted fw-bolder fs-7 text-uppercase gs-0'>
              {headers.map((column: ColumnInstance<Supplier>) => (
                <CustomHeaderColumn key={column.id} column={column} />
              ))}
            </tr>
          </thead>
          <tbody className='text-gray-600 fw-bold' {...getTableBodyProps()}>
            {rows.length > 0 ? (
              rows.map((row: Row<Supplier>, i) => {
                prepareRow(row)
                return <CustomRow row={row} key={`row-${i}-${row.id}`} />
              })
            ) : (
              <tr>
                <td colSpan={7}>
                  <div className='d-flex text-center w-100 align-content-center justify-content-center'>
                    Aucun enregistrement correspondant n'a été trouvé
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <SuppliersListPagination />
      {isLoading && <Loading />}
    </CardBody>
  )
}

export {SuppliersTable}
