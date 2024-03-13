import {useMemo} from 'react'
import {useTable, ColumnInstance, Row} from 'react-table'
import {CustomHeaderColumn} from './columns/CustomHeaderColumn'
import {CustomRow} from './columns/CustomRow'
import {useQueryResponseData, useQueryResponseLoading} from '../core/QueryResponseProvider'
import {clientsColumns} from './columns/_columns'
import {ClientsListPagination} from '../components/pagination/ClientsListPagination'
import {CardBody, Loading} from '../../../../../_metronic/helpers'
import {Client} from '../../core/_models'

const ClientsTable = () => {
  const clients = useQueryResponseData()
  const isLoading = useQueryResponseLoading()
  const data = useMemo(() => clients, [clients])
  const columns = useMemo(() => clientsColumns, [])
  const {getTableProps, getTableBodyProps, headers, rows, prepareRow} = useTable({
    columns,
    data,
  })

  return (
    <CardBody className='py-4'>
      <div className='table-responsive'>
        <table
          id='table_clients'
          className='table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer'
          {...getTableProps()}
        >
          <thead>
            <tr className='text-start text-muted fw-bolder fs-7 text-uppercase gs-0'>
              {headers.map((column: ColumnInstance<Client>) => (
                <CustomHeaderColumn key={column.id} column={column} />
              ))}
            </tr>
          </thead>
          <tbody className='text-gray-600 fw-bold' {...getTableBodyProps()}>
            {rows.length > 0 ? (
              rows.map((row: Row<Client>, i) => {
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
      <ClientsListPagination />
      {isLoading && <Loading />}
    </CardBody>
  )
}

export {ClientsTable}
