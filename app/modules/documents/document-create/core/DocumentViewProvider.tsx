import {FC, useState, createContext, useContext, useEffect} from 'react'
import {WithChildren} from '../../../../../_metronic/helpers'
import {DocumentContextProps, initialView} from './_init'
import {CodeDocument, ModuleDocument} from '../../core/models'

const DocumentContext = createContext<DocumentContextProps>(initialView)

const DocumentViewProvider: FC<WithChildren & {code: CodeDocument; type: ModuleDocument}> = ({
  children,
  code,
  type,
}) => {
  const [title, setTitle] = useState<string | undefined>(undefined)

  useEffect(() => {
    if (code === 'DV') {
      setTitle('devis')
    }
    if (code === 'CV') {
      setTitle('commande client')
    }

    if (code === 'BL') {
      setTitle('bon de livraison')
    }

    if (code === 'FV') {
      setTitle('facture vente')
    }

    if (code === 'CA') {
      setTitle('commande fournisseur')
    }

    if (code === 'BR') {
      setTitle('bon de reciption')
    }

    if (code === 'FA') {
      setTitle('facture achat')
    }
  }, [code])

  return (
    <DocumentContext.Provider value={{code, type, title, setTitle}}>
      {children}
    </DocumentContext.Provider>
  )
}

const useDocumentView = () => useContext(DocumentContext)

export {DocumentViewProvider, useDocumentView}
