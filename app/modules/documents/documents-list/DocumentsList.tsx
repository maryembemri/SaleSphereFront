import {ListViewProvider} from './core/ListViewProvider'
import {QueryRequestProvider, useQueryRequest} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {DocumentsListHeader} from './components/header/DocumentsListHeader'
import {DocumentsTable} from './table/DocumentsTable'
import {Card} from '../../../../_metronic/helpers'
import {FC, useEffect} from 'react'
import InvoiceSection from './components/header/InvoiceSection'
import {useDocumentContext} from '../document-create/core/DocumentFormProvider'
import {CodeDocument, ModuleDocument} from '../core/models'

const DocumentsList = () => {
  const {state} = useQueryRequest()
  const code = state.code
  return (
    <>
      <DocumentsListHeader />
      {(code === 'FV' || code === 'FA') && <InvoiceSection />}
      <Card>
        <DocumentsTable />
      </Card>
    </>
  )
}

type Props = {
  code: CodeDocument
  type: ModuleDocument
}

const DocumentsListWrapper: FC<Props> = ({code, type}) => {
  const {formData, setFormData} = useDocumentContext()

  useEffect(() => {
    setFormData({...formData, code, type})
  }, [code, type])

  return (
    <QueryRequestProvider code={code} type={type}>
      <QueryResponseProvider>
        <ListViewProvider>
          <DocumentsList />
        </ListViewProvider>
      </QueryResponseProvider>
    </QueryRequestProvider>
  )
}

export {DocumentsListWrapper}
