import {ChangeEvent, FC, useEffect} from 'react'
import {Card, Currency, Icon} from '../../../../../_metronic/helpers'
import {useFormikContext} from 'formik'
import {useListView} from '../core/ListViewProvider'
import {uid} from 'uid'
import {CaisseForm, CaisseFormItem} from '../../core/_models'
import {Product} from '../../../products/core/models'

const SelectedProducts: FC = () => {
  const {formItems, setFormItems, setSelected} = useListView()
  const {setFieldValue} = useFormikContext<CaisseForm>()

  const addItemHandler = (product: Product) => {
    const id = uid()
    setFormItems((prevItem) => [
      ...prevItem,
      {
        id: id,
        productId: product.id,
        product,
        cost: 1,
        quantity: 1,
        total: 1,
      },
    ])
  }

  const deleteItemHandler = (id: string, product: Product) => {
    setSelected((prevItem) => prevItem.filter((item) => item !== product.id))
    setFormItems((prevItem) => prevItem.filter((item) => item.id !== id))
  }

  const editItemHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const editedItem = {
      id: event.target.id,
      name: event.target.name,
      value: event.target.value,
    }

    console.log(editedItem)

    const newItems = formItems.map((item: CaisseFormItem) => {
      for (const key in item) {
        if (key === editedItem.name && item.id === editedItem.id) {
          item[key] = editedItem.value
        }
      }
      return item
    })

    setFormItems(newItems)
  }

  const qty = formItems.reduce((prev, curr) => {
    if (curr.product) return prev + Number(curr.quantity)
    else return prev
  }, 0)

  const total = formItems.reduce((prev, curr) => {
    if (curr.product) return prev + curr.quantity * curr.cost
    else return prev
  }, 0)

  useEffect(() => {
    setFieldValue('totalQuantity', qty)
    setFieldValue('totalCost', total)
  }, [qty, total])

  return (
    <Card className='h-100'>
      <div className='card-header d-flex flex-column border-0 p-4 mb-0'>
        <label className='d-flex align-formItems-center form-label mb-5'>
          Saisir les détails de pour chaque produit.
          <i
            className='fas fa-exclamation-circle ms-2 fs-7'
            data-bs-toggle='tooltip'
            title='Monthly billing will be based on your account plan'
          ></i>
        </label>
      </div>
      <div className='row mb-0 w-100 px-8'>
        <div className='col-11 col-sm-5 d-flex align-formItems-center'>
          <span className='label'>Produit</span>
        </div>
        <div className='col-11 col-sm-2 text-center'>
          <span className='label'>Quantité</span>
        </div>
        <div className='col-11 col-sm-2 text-center'>
          <span className='label'>Prix</span>
        </div>
        <div className='col-11 col-sm-2 text-center'>
          <span className='label'>Total</span>
        </div>
        <div className='col-11 col-sm-2'></div>
      </div>
      <div className='card-body overflow-auto min-h-350px mh-350px p-4 m-4 mt-0 border border-1 rounded'>
        {formItems.map((item: CaisseFormItem, index) => (
          <div key={index} className='row mb-5 mx-1'>
            <div className='col-11 col-sm-5 d-flex p-0'>
              <span className='d-flex flex-column'>
                <span className='fw-bolder text-gray-800 text-hover-primary fs-6'>
                  {item.product.label}
                </span>
                <span className='                   s-7 fw-bold text-gray-400'>
                  {item.product.code}
                </span>
              </span>
            </div>
            <div className='col-11 col-sm-2'>
              <input
                id={item.id}
                className='form-control form-control-sm'
                type='number'
                name='quantity'
                min='1'
                onChange={editItemHandler}
                value={item.quantity}
              />
            </div>
            <div className='col-11 col-sm-2'>
              <input
                id={item.id}
                className='form-control form-control-sm'
                type='number'
                name='price'
                min='1'
                onChange={editItemHandler}
              />
            </div>
            <div className='col-11 col-sm-2'>
              <div className='form-control form-control-sm'>
                <Currency decimal={2} value={item.cost * item.quantity} />
              </div>
            </div>
            <div className='col-1 d-flex flex-column justify-content-end'>
              <button
                type='button'
                onClick={() => deleteItemHandler(item.id, item.product)}
                className='btn btn-sm btn-icon btn-light-danger p-0-'
              >
                <Icon iconName={'cross'} className='fs-2x' />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className='card-footer border-0 text-end py-4'>
        <button className='btn btn-sm btn-danger me-2' type='reset'>
          Annuler
        </button>
        <button className='btn btn-sm btn-primary' type='submit'>
          Confirmer
        </button>
      </div>
    </Card>
  )
}

export {SelectedProducts}
