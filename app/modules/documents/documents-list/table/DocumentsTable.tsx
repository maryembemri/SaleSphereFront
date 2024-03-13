import {useMemo} from 'react'
import {useTable, ColumnInstance, Row} from 'react-table'
import {CustomHeaderColumn} from './columns/CustomHeaderColumn'
import {CustomRow} from './columns/CustomRow'
import {useQueryResponseData, useQueryResponseLoading} from '../core/QueryResponseProvider'
import {documentsColumns} from './columns/_columns'
import {Document} from '../../core/models'
import {DocumentsListPagination} from '../components/pagination/DocumentsListPagination'
import {CardBody, Loading} from '../../../../../_metronic/helpers'

const DocumentsTable = () => {
  const documents = useQueryResponseData()
  const isLoading = useQueryResponseLoading()

  const data = useMemo(() => documents, [documents])
  const columns = useMemo(() => documentsColumns, [])
  const {getTableProps, getTableBodyProps, headers, rows, prepareRow} = useTable({
    columns,
    data,
  })

  return (
    <CardBody className='px-0 py-4'>
      <div className='table-responsive'>
        <table
          id='table_documents'
          className='table table-hover align-middle table-row-dashed fs-6 gy-5 dataTable no-footer'
          {...getTableProps()}
        >
          <thead>
            <tr className='text-start text-muted fw-bolder fs-7 text-uppercase '>
              {headers.map((column: ColumnInstance<Document>) => (
                <CustomHeaderColumn key={column.id} column={column} />
              ))}
            </tr>
          </thead>
          <tbody className='text-gray-800 fw-semibold' {...getTableBodyProps()}>
            {rows.length > 0 ? (
              rows.map((row: Row<Document>, i) => {
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
      <DocumentsListPagination />
      {isLoading && <Loading />}
    </CardBody>
  )
}

export {DocumentsTable}
