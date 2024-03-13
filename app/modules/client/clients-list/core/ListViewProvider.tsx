import {FC, useState, createContext, useContext, useMemo, Dispatch, SetStateAction} from 'react'
import {WithChildren} from '../../../../../_metronic/helpers'

type ListViewContextProps = {
  displayMode: 'list' | 'grid' | string
  setDisplayMode: Dispatch<SetStateAction<'list' | 'grid' | string>>
  isArchived: boolean
  setArchived: Dispatch<SetStateAction<boolean>>
}

const initialListView: ListViewContextProps = {
  displayMode: 'grid',
  setDisplayMode: () => {},
  isArchived: false,
  setArchived: () => {},
}

const ListViewContext = createContext<ListViewContextProps>(initialListView)

const ListViewProvider: FC<WithChildren> = ({children}) => {
  const view = localStorage.getItem('CLIENT-VIEW-KEY')
  const [displayMode, setDisplayMode] = useState<'list' | 'grid' | string>(view || 'grid')

  const [isArchived, setArchived] = useState<boolean>(initialListView.isArchived)

  const contextValue = useMemo(
    () => ({
      displayMode,
      setDisplayMode,
      isArchived,
      setArchived,
    }),
    [isArchived, setArchived, displayMode, setDisplayMode]
  )

  return <ListViewContext.Provider value={contextValue}>{children}</ListViewContext.Provider>
}

const useListView = () => useContext(ListViewContext)

export {ListViewProvider, useListView}
