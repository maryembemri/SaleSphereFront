import {FC, useState, createContext, useContext, useMemo, Dispatch, SetStateAction} from 'react'
import {calculatedGroupingIsDisabled, WithChildren} from '../../../../../_metronic/helpers'
import {useQueryResponse, useQueryResponseData} from './QueryResponseProvider'
import {CaisseFormItem} from '../../core/_models'
import {uid} from 'uid'
import {Product} from '../../../products'

type ListViewContextProps = {
  selected: Array<number>
  setSelected: Dispatch<SetStateAction<Array<number>>>
  formItems: Array<CaisseFormItem>
  setFormItems: Dispatch<SetStateAction<Array<CaisseFormItem>>>
  onSelect: (selectedProduct: Product) => void
  clearSelected: () => void
  disabled: boolean
}

const initialListView: ListViewContextProps = {
  selected: [],
  setSelected: () => {},
  onSelect: () => {},
  formItems: [],
  setFormItems: () => {},
  clearSelected: () => {},
  disabled: false,
}

function groupingOnSelect(
  product: Product,
  selected: Array<number>,
  setSelected: Dispatch<SetStateAction<Array<number>>>,
  formItems: Array<CaisseFormItem>,
  setFormItems: Dispatch<SetStateAction<Array<CaisseFormItem>>>
) {
  if (!product) {
    return
  }

  if (selected.includes(product.id)) {
    setSelected(selected.filter((item) => item !== product.id))
    setFormItems(formItems.filter((item) => item.product.id !== product.id))
  } else {
    const updatedSelected = [...selected]
    updatedSelected.push(product.id)
    setSelected(updatedSelected)
    const id = uid(6)
    const updatedItems = [...formItems]
    updatedItems.push({
      id,
      productId: product.id,
      product,
      cost: 1,
      quantity: 1,
    })
    setFormItems(updatedItems)
  }
}

const ListViewContext = createContext<ListViewContextProps>(initialListView)

const ListViewProvider: FC<WithChildren> = ({children}) => {
  const [selected, setSelected] = useState<Array<number>>(initialListView.selected)
  const [formItems, setFormItems] = useState<Array<CaisseFormItem>>(initialListView.formItems)
  const {isLoading} = useQueryResponse()

  const data = useQueryResponseData()
  const disabled = useMemo(() => calculatedGroupingIsDisabled(isLoading, data), [isLoading, data])

  return (
    <ListViewContext.Provider
      value={{
        selected,
        setSelected,
        formItems,
        setFormItems,
        disabled,
        onSelect: (product: Product) => {
          groupingOnSelect(product, selected, setSelected, formItems, setFormItems)
        },

        clearSelected: () => {
          setSelected([])
          setFormItems([])
        },
      }}
    >
      {children}
    </ListViewContext.Provider>
  )
}

const useListView = () => useContext(ListViewContext)

export {ListViewProvider, useListView}
