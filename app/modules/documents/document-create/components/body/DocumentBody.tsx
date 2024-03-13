import {FC, ChangeEvent} from 'react'
import {uid} from 'uid'
import {FormItem} from '../../../core/models'
import {useDocumentContext} from '../../core/DocumentFormProvider'
import {useQuery} from 'react-query'
import {useDocumentView} from '../../core/DocumentViewProvider'
import ProductItem from './ProductItem'
import {Product, getAllProducts} from '../../../../products'

type OptionType = {
  label: React.ReactNode
  value: number | string | undefined
  product?: Product
}

const DocumentBody: FC = () => {
  const {type} = useDocumentView()
  const {formData} = useDocumentContext()
  const {items, setItems} = useDocumentContext()

  const {data: products, isLoading: productsLoading} = useQuery('all-products', getAllProducts, {
    keepPreviousData: true,
  })

  const addItemHandler = () => {
    const id = uid()
    setItems((prevItem) => [
      ...prevItem,
      {
        id: id,
        product: undefined,
        description: '',
        quantity: 1,
        discount: 0,
        price: 1.0,
        tax: 1.0,
      },
    ])

    console.log(items)
  }

  const deleteItemHandler = (id: string) => {
    setItems((prevItem) => prevItem.filter((item) => item.id !== id))
  }

  const editItemHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const editedItem = {
      id: event.target.id,
      name: event.target.name,
      value: event.target.value,
    }

    const newItems = items.map((item: FormItem) => {
      for (const key in item) {
        if (key === editedItem.name && item.id === editedItem.id) {
          item[key] = editedItem.value
        }
      }
      return item
    })

    setItems(newItems)
  }

  const selectItemHandler = (value: OptionType, id: string) => {
    const optionProduct = value.product

    const updatedItems = items.map((item) => {
      if (item.id === id && value.product) {
        return {
          ...item,

          product: optionProduct,
          price: optionProduct?.price || 0,
          tax: 1,
        }
      }
      return item
    })

    setItems(updatedItems)
  }

  return (
    <section>
      <hr className='h-4px opacity-100 bg-gray-300 border-0 mb-0 mt-15' />
      <table className='table w-100 text-left mt-0'>
        <thead>
          <tr className='bg-light fw-bold fs-3 text-center border-top '>
            <th className='col-4'>Désignation</th>
            <th className='col-1'>Quantitée</th>
            <th className='col-1 text-center'>Prix HT</th>
            <th className='col-2 text-center'>Total HT</th>
            <th className='col-1 text-center'>TVA</th>

            <th className='col-1 text-center'>Action</th>
          </tr>
        </thead>
        <tbody>
          {productsLoading && <tr>Loading produits...</tr>}
          {products &&
            items.map((item) => (
              <ProductItem
                key={item.id}
                id={item.id}
                options={products}
                product={item.product}
                description={item.description}
                quantity={item.quantity}
                price={item.price}
                tax={item.tax}
                onDeleteItem={deleteItemHandler}
                onEditItem={editItemHandler}
                onSelectItem={selectItemHandler}
              />
            ))}
        </tbody>
      </table>

      <div className='text-center'>
        <button
          disabled={!(formData.supplier || formData.client)}
          className='btn btn-secondary btn-sm'
          type='button'
          onClick={addItemHandler}
        >
          Ajouter produit
        </button>
      </div>
    </section>
  )
}

export default DocumentBody
