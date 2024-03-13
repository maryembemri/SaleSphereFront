import React from 'react'
import {Card, CardBody, Currency} from '../../../../../_metronic/helpers'
import {useFormikContext} from 'formik'
import {CaisseForm} from '../../core/_models'

const CaisseHeader = () => {
  const {values} = useFormikContext<CaisseForm>()

  return (
    <div className='col mb-5'>
      <Card>
        <CardBody>
          <div className='row px-6 text-primary'>
            <div className='col-12 col-sm-3 fw-bold'>Cassier</div>
            <div className='col-12 col-sm-3 fw-bold'>Nombre des produits</div>
            <div className='col-12 col-sm-3 fw-bold'>Qauntité total</div>
            <div className='col-12 col-sm-3 fw-bold'>Prix total</div>
          </div>

          <div className='row border px-6 py-3 rounded'>
            <div className='col-12 col-sm-3'>{values.project}</div>
            <div className='col-12 col-sm-3'>{values.productNumber}</div>
            <div className='col-12 col-sm-3'>{values.totalQuantity}</div>
            <div className='col-12 col-sm-3 fw-bold'>
              <Currency value={values.totalCost} /> TND
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default CaisseHeader
