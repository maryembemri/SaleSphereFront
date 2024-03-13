import React, {createContext, useContext, useState} from 'react'
import {WithChildren} from '../../../../../_metronic/helpers'
import {initialFormData, initialItems} from './_init'
import {FormData, FormItem} from '../../core/models'

interface FormContextProps {
  itemIdForTransform?: number
  formData: FormData
  items: FormItem[]
  setItemIdForTransform: React.Dispatch<React.SetStateAction<number | undefined>>
  setFormData: React.Dispatch<React.SetStateAction<FormData>>
  setItems: React.Dispatch<React.SetStateAction<FormItem[]>>
  resetForm: () => void
}

const FormContext = createContext<FormContextProps>({
  itemIdForTransform: undefined,
  setItemIdForTransform: () => {},
  formData: initialFormData,
  setFormData: () => {},
  items: initialItems,
  setItems: () => {},
  resetForm: () => {},
})

const DocumentFormProvider: React.FC<WithChildren> = ({children}) => {
  const [itemIdForTransform, setItemIdForTransform] = useState<number | undefined>(undefined)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [items, setItems] = useState<FormItem[]>(initialItems)

  const resetForm = () => {
    setItemIdForTransform(undefined)
    setFormData(initialFormData)
    setItems(initialItems)
  }

  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
        items,
        setItems,
        itemIdForTransform,
        setItemIdForTransform,
        resetForm,
      }}
    >
      {children}
    </FormContext.Provider>
  )
}

const useDocumentContext = () => useContext(FormContext)

export {useDocumentContext, DocumentFormProvider}
