import Select from 'react-select'
import {FC, useState} from 'react'
import {Icon, Currency} from '../../../../../../_metronic/helpers'
import {useDocumentContext} from '../../core/DocumentFormProvider'
import {GroupBase} from 'react-select'
import {Product} from '../../../../products/core/models'

type Props = {
  id: any
  name: any
  options: Product[]
  value: Product
  onChange: any
}

type OptionType = {
  label: React.ReactNode
  value: number | string | undefined
  product: Product
}

const CustomItemSelect: FC<Props> = ({id, name, options, onChange, value}) => {
  const {formData} = useDocumentContext()
  const selectedProduct: OptionType = {
    label: value?.label,
    value: value?.id,
    product: value,
  }
  const formattedOptions: readonly (OptionType | GroupBase<OptionType>)[] = options.map(
    (product: Product) => ({
      label: product.label,
      value: product.id,
      product,
    })
  )

  const handleSelectChange = (selectedOption: any) => {
    onChange(selectedOption, id)
  }

  return (
    <Select
      required
      isDisabled={!(formData.supplier || formData.client)}
      options={formattedOptions}
      onChange={handleSelectChange}
      value={selectedProduct}
    />
  )
}

const ProductItem = ({
  id,
  options,
  product,
  description,
  quantity,
  price,
  tax,
  onDeleteItem,
  onEditItem,
  onSelectItem,
}) => {
  const [hasDescription, setDescription] = useState<boolean>(false)

  const deleteItemHandler = () => {
    onDeleteItem(id)
  }

  return (
    <tr>
      <td>
        <CustomItemSelect
          id={id}
          name='product'
          options={options}
          onChange={onSelectItem}
          value={product || undefined}
        />

        <span
          onClick={() => setDescription(!hasDescription)}
          className='link link-primary cursor-pointer'
        >
          {hasDescription ? '- Retirer' : '+ Ajouter'} description
        </span>
        {hasDescription && (
          <input
            className={'w-100 form-control form-control-sm fs-7'}
            type='text'
            name='description'
            id={id}
            disabled={!product || !hasDescription}
            value={description}
            onChange={(event) => onEditItem(event)}
          />
        )}
      </td>
      <td>
        <input
          className={'w-100 form-control form-control-sm fs-6'}
          type='number'
          min='1'
          name='quantity'
          id={id}
          disabled={!product}
          value={quantity}
          onChange={(event) => onEditItem(event)}
        />
      </td>
      <td>
        <input
          className={'w-100 form-control form-control-sm fs-6'}
          type='number'
          min='1.00'
          step='0.01'
          name='price'
          disabled={!product}
          id={id}
          value={price}
          onChange={(event) => onEditItem(event)}
        />
      </td>

      <td className='text-center'>
        <div className='form-control form-control-sm'>
          <Currency className='fs-5' value={quantity * price} decimal={2} />
        </div>
      </td>
      <td>
        <div className='input-group input-group-sm'>
          <input
            className={'form-control form-control-sm fs-6 pe-1'}
            type='number'
            min='0'
            max='100'
            step='1'
            name='tax'
            disabled={!product}
            id={id}
            value={tax}
            onChange={(event) => onEditItem(event)}
          />
          <span className='input-group-text'>%</span>
        </div>
      </td>
      <td className='text-center'>
        <button
          className='btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-danger w-40px h-40px'
          onClick={deleteItemHandler}
        >
          <Icon iconName={'trash'} className='fs-1' />
        </button>
      </td>
    </tr>
  )
}

export default ProductItem
