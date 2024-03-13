import {useMemo} from 'react'
import {useTable, ColumnInstance, Row} from 'react-table'
import {CustomHeaderColumn} from './columns/CustomHeaderColumn'
import {CustomRow} from './columns/CustomRow'
import {bankAccountsColumns} from './columns/_columns'
import {BankAccount} from '../../../../../_metronic/helpers/models/BankAccount'
import {CardBody} from '../../../../../_metronic/helpers'

const BankAccountsTable = () => {
  const bankAccountArray: BankAccount[] = [
    {
      id: 1,
      bank: 'Attijari Bank',
      designation: 'Attijari Bank',
      agency: 'Attijari A',
      swift: 'XXXXXXXX',
      rib: '041468749894976946794',
      isActive: true,
      created_at: '2023-09-05T00:00:00Z',
    },
    {
      id: 2,
      bank: 'Al Zitouna Bank',
      designation: 'Al Zitouna',
      agency: 'Zitouna A',
      swift: 'XXXXXXXX',
      rib: '094979467979794979494',
      isActive: true,
      created_at: '2023-09-05T00:00:00Z',
    },
  ]

  //   const bankAccounts = useQueryResponseData()
  const bankAccounts = bankAccountArray
  const data = useMemo(() => bankAccounts, [bankAccounts])
  const columns = useMemo(() => bankAccountsColumns, [])
  const {getTableProps, getTableBodyProps, headers, rows, prepareRow} = useTable({
    columns,
    data,
  })

  return (
    <CardBody className='py-4'>
      <div className='table-responsive'>
        <table
          id='table_bankAccounts'
          className='table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer'
          {...getTableProps()}
        >
          <thead>
            <tr className='text-start text-muted fw-bolder fs-7 text-uppercase gs-0'>
              {headers.map((column: ColumnInstance<BankAccount>) => (
                <CustomHeaderColumn key={column.id} column={column} />
              ))}
            </tr>
          </thead>
          <tbody className='text-gray-600 fw-bold' {...getTableBodyProps()}>
            {rows.length > 0 ? (
              rows.map((row: Row<BankAccount>, i) => {
                prepareRow(row)
                return <CustomRow row={row} key={`row-${i}-${row.id}`} />
              })
            ) : (
              <tr>
                <td colSpan={7}>
                  <div className='d-flex text-center w-100 align-content-center justify-content-center'>
                    No matching records found
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </CardBody>
  )
}

export {BankAccountsTable}
