import {FC, useEffect} from 'react'
import {DocumentViewProvider} from './core/DocumentViewProvider'
import DocumentForm from './components/DocumentForm'
import {Card, CardBody} from '../../../../_metronic/helpers'
import {CodeDocument, FormItem, ModuleDocument} from '../core/models'
import {useDocumentContext} from './core/DocumentFormProvider'
import {getDocumentById} from '../core/requests'
import {useQuery} from 'react-query'
import {initialFormData} from './core/_init'

const DocumentCreate: FC = () => {
  return (
    <Card>
      <CardBody>
        <DocumentForm />
      </CardBody>
    </Card>
  )
}
const Loading: FC = () => {
  return (
    <Card className='min-h-550px'>
      <CardBody className='h-100 d-flex justify-content-center align-items-center'>
        <div className='spinner-border text-gray-600' role='status'>
          <span className='sr-only'>Chargement...</span>
        </div>
      </CardBody>
    </Card>
  )
}

const DocumentCreateWrapper: FC<{code: CodeDocument; type: ModuleDocument}> = ({code, type}) => {
  const {itemIdForTransform, formData, setFormData, setItems} = useDocumentContext()

  useEffect(() => {
    setFormData({...formData, code, type})
  }, [code, type])

  const {
    data: documentData,
    refetch,
    isLoading: documentDataLoading,
  } = useQuery(
    ['document', itemIdForTransform], // Unique query key based on documentId
    () => getDocumentById(Number(itemIdForTransform)), // Fetch document data based on documentId
    {
      enabled: !!itemIdForTransform, // Enable query only when documentId is available
    }
  )

  useEffect(() => {
    console.log(formData)
    if (documentData) {
      setFormData({
        ...initialFormData,
        reference: documentData?.document.reference,
        date: new Date(documentData?.document.date).toISOString().substring(0, 10),
        client: documentData?.document.client,
        supplier: documentData.document.supplier,
        note: documentData?.document.note,
        code,
        type,
      })

      const itemsDTO: FormItem[] =
        documentData?.items.map((item) => ({
          id: String(item.id),
          product: item.product,
          description: item.description || '',
          price: item.price,
          discount: item.discount,
          quantity: item.quantity,
          tax: item.tax,
        })) || []

      setItems(itemsDTO)
    }
  }, [documentData])

  if (documentDataLoading) return <Loading />

  return (
    <DocumentViewProvider code={code} type={type}>
      <DocumentCreate />
    </DocumentViewProvider>
  )
}

export default DocumentCreateWrapper
