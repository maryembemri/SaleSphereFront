import {Dispatch, FC, SetStateAction, createContext, useContext, useState} from 'react'
import {WithChildren} from '../../../../../../_metronic/helpers'

const currentMonth: number = new Date().getMonth()
const currentYear: number = new Date().getFullYear()

type ContextProps = {
  month?: number
  setMonth: Dispatch<SetStateAction<number | undefined>>
  year?: number
  setYear: Dispatch<SetStateAction<number | undefined>>
  status?: string
  setStatus: Dispatch<SetStateAction<string | undefined>>
}

const FilterContext = createContext<ContextProps>({
  month: undefined,
  setMonth: () => {},
  year: undefined,
  setYear: () => {},
  status: undefined,
  setStatus: () => {},
})

const useDocumentFilter = () => useContext(FilterContext)

const DocumentFilterProvider: FC<WithChildren> = ({children}) => {
  const [year, setYear] = useState<number | undefined>(currentYear)
  const [month, setMonth] = useState<number | undefined>(currentMonth)
  const [status, setStatus] = useState<string | undefined>(undefined)

  return (
    <FilterContext.Provider value={{year, setYear, month, setMonth, status, setStatus}}>
      {children}
    </FilterContext.Provider>
  )
}

export {useDocumentFilter, DocumentFilterProvider}
