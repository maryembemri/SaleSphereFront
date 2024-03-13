import React from 'react'
import {CardBody} from '../../../../../_metronic/helpers'

const VatTable = () => {
  return (
    <CardBody className='py-4'>
      <div className='table-responsive'>
        <table
          id='table_taxs'
          className='table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer'
        >
          <thead>
            <tr className='text-start text-muted fw-bolder fs-7 text-uppercase gs-0'>
              <th className='min-w-25px text-center'>#</th>
              <th className='min-w-125px text-center'>TVA</th>
              <th className='min-w-125px text-end'>Actions</th>
            </tr>
          </thead>
          <tbody className='text-gray-600 fw-bold'>
            <tr>
              <td colSpan={7}>
                <div className='d-flex text-center w-100 align-content-center justify-content-center'>
                  No matching records found
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </CardBody>
  )
}

export default VatTable
