import {createContext, Dispatch, SetStateAction, useEffect, useState} from 'react'
import qs from 'qs'
import {ID, QueryResponseContextProps, QueryState} from './models'
// import {Category} from '../models/Category'
import {Status} from '../models/Status'

function createResponseContext<T>(initialState: QueryResponseContextProps<T>) {
  return createContext(initialState)
}

function isNotEmpty(obj: unknown) {
  return obj !== undefined && obj !== null && obj !== ''
}

// Example: page=1&items_per_page=10&sort=id&order=desc&search=a&filter_name=a&filter_online=false
function stringifyRequestQuery(state: QueryState): string {
  const pagination = qs.stringify(state, {filter: ['page', 'items_per_page'], skipNulls: true})
  const sort = qs.stringify(state, {filter: ['sort', 'order'], skipNulls: true})
  const search = isNotEmpty(state.search)
    ? qs.stringify(state, {filter: ['search'], skipNulls: true})
    : ''
  const onlyArchived = qs.stringify(state, {filter: ['archived'], skipNulls: true})
  const code = qs.stringify(state, {filter: ['code'], skipNulls: true})
  const type = qs.stringify(state, {filter: ['type'], skipNulls: true})

  const filter = state.filter
    ? Object.entries(state.filter as Object)
        .filter((obj) => isNotEmpty(obj[1]))
        .map((obj) => {
          return `filter_${obj[0]}=${obj[1]}`
        })
        .join('&')
    : ''

  return [pagination, sort, search, onlyArchived, code, type, filter].filter((f) => f).join('&')
}

function parseRequestQuery(query: string): QueryState {
  const cache: unknown = qs.parse(query)
  return cache as QueryState
}

function calculatedGroupingIsDisabled<T>(isLoading: boolean, data: Array<T> | undefined): boolean {
  if (isLoading) {
    return true
  }

  return !data || !data.length
}

function calculateIsAllDataSelected<T>(data: Array<T> | undefined, selected: Array<ID>): boolean {
  if (!data) {
    return false
  }

  return data.length > 0 && data.length === selected.length
}

function groupingOnSelect(
  id: ID,
  selected: Array<ID>,
  setSelected: Dispatch<SetStateAction<Array<ID>>>
) {
  if (!id) {
    return
  }

  if (selected.includes(id)) {
    setSelected(selected.filter((itemId) => itemId !== id))
  } else {
    const updatedSelected = [...selected]
    updatedSelected.push(id)
    setSelected(updatedSelected)
  }
}

function groupingOnSelectAll<T>(
  isAllSelected: boolean,
  setSelected: Dispatch<SetStateAction<Array<ID>>>,
  data?: Array<T & {id?: ID}>
) {
  if (isAllSelected) {
    setSelected([])
    return
  }

  if (!data || !data.length) {
    return
  }

  setSelected(data.filter((item) => item.id).map((item) => item.id))
}

// Hook
function useDebounce(value: string | undefined, delay: number) {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value)
  useEffect(
    () => {
      // Update debounced value after delay
      const handler = setTimeout(() => {
        setDebouncedValue(value)
      }, delay)
      // Cancel the timeout if value changes (also on delay change or unmount)
      // This is how we prevent debounced value from updating if value is changed ...
      // .. within the delay period. Timeout gets cleared and restarted.
      return () => {
        clearTimeout(handler)
      }
    },
    [value, delay] // Only re-call effect if value or delay changes
  )
  return debouncedValue
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  const day = date.getDate().toString().padStart(2, '0')
  const month = (date.getMonth() + 1).toString().padStart(2, '0') // Months are 0-based
  const year = date.getFullYear().toString()

  return `${day}-${month}-${year}`
}

function generateReference(code: string, number: number): string {
  const paddedNumber = String(number).padStart(4, '0') // Pad the number with leading zeros
  return `${code}-${paddedNumber}`
}

// function filterCategory(
//   module: 'sale' | 'purchase',
//   categories?: Category[]
// ): Category[] | undefined {
//   if (!categories) return undefined

//   if (module === 'sale') {
//     return categories.filter((category) => category.isSaleRestricted)
//   } else if (module === 'purchase') {
//     return categories.filter((category) => category.isPurchaseRestricted)
//   } else {
//     return undefined
//   }
// }

function filterStatus(module: 'document', status?: Status[]): Status[] | undefined {
  if (!status) return undefined
  return status.filter((item) => item.category === module)
}

export {
  createResponseContext,
  stringifyRequestQuery,
  parseRequestQuery,
  calculatedGroupingIsDisabled,
  calculateIsAllDataSelected,
  groupingOnSelect,
  groupingOnSelectAll,
  useDebounce,
  isNotEmpty,
  generateReference,
  formatDate,
  filterStatus,
}
