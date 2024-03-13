import React from 'react'
import {Icon} from '../../../../../_metronic/helpers'
import ProductCreate from '../ProductCreate'

const CreateProductModal = () => {
  return (
    <div className='modal fade' id='modal_create_product' aria-hidden='true'>
      <div className='modal-dialog modal-xl'>
        <div className='modal-content rounded'>
          <div className='modal-header justify-content-between border-0 pb-0'>
            <div className='model-title'>
              <h2>Ajouter un produit</h2>
            </div>
            <div className='btn btn-sm btn-icon btn-active-color-primary' data-bs-dismiss='modal'>
              <Icon iconName='cross' className='fs-1' />
            </div>
          </div>

          <ProductCreate />
        </div>
      </div>
    </div>
  )
}

export default CreateProductModal
