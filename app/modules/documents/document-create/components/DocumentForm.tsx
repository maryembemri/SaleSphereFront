import {FC} from 'react'
import DocumentHeader from './header/DocumentHeader'
import DocumentBody from './body/DocumentBody'
import {useNavigate} from 'react-router-dom'
import DocumentFooter from './footer/DocumentFooter'
import {useDocumentContext} from '../core/DocumentFormProvider'
import {FormData, DocumentItem, FormItem, DocumentHeader as Doc} from '../../core/models'
import {createDocument} from '../../core/requests'
import {Success} from '../../../../../_metronic/helpers'
import Swal from 'sweetalert2'

export function parseFormDataToDocumentHeader(formData: FormData): Doc {
  const {id, client, supplier, ...header} = formData
  return {
    subtotal: header.subtotal || 0,
    tax: header.tax || 0,
    discount: header.discount || 0,
    total: header.total || 0,
    date: header.date || '',
    reference: header.reference || '',
    code: header.code,
    type: header.type,
    clientId: client?.id,
    supplierId: supplier?.id,
    note: header.note || undefined,
  }
}

const DocumentForm: FC = () => {
  const {formData, items} = useDocumentContext()
  const navigate = useNavigate()
  const handleSubmit = async (e: any) => {
    e.preventDefault()

    try {
      Swal.fire({
        title: 'Êtes-vous sûr ?',
        text: "Veuillez vérifier les détails du document pour vous assurer qu'ils sont corrects avant de poursuivre.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Oui, confirmer',
        cancelButtonText: 'Non, annulez !',
        customClass: {
          confirmButton: 'btn btn-primary',
          cancelButton: 'btn btn-danger',
        },
        buttonsStyling: false,
      }).then(async (result) => {
        const parseItemToDocumentItem = (item: FormItem): DocumentItem => {
          const {id, product, tax, ...docItem} = item
          return {
            ...docItem,
            tax: formData.client?.isExempt ? 0 : tax,
            productId: product?.id,
          }
        }

        const documentItems = items.map((item: FormItem) => parseItemToDocumentItem(item))

        if (result.isConfirmed) {
          const documentCreated = await createDocument(
            parseFormDataToDocumentHeader(formData),
            documentItems
          )
          Success.fire({
            title: 'Document créé!',
            text: 'Document créé avec succès',
          }).then(() => {
            navigate('/sale/document/preview/' + documentCreated?.document.id)
          })
        }
      })
    } catch (error) {
      console.error('Error creating document:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className='form-relative d-flex flex-column px-2 md-flex-row'>
      <DocumentHeader />

      <DocumentBody />

      <DocumentFooter />

      <div className='basis-1/4 bg-transparent mt-10'>
        <div className='sticky top-0 z-10 space-y-4 divide-y divide-gray-900 pb-8 md-pt-6 md-pl-4'>
          <button
            className='btn btn-success btn-sm me-3'
            type='submit'
            disabled={!(formData.client || formData.supplier) || !items[0]?.product}
          >
            Soumettre
          </button>
          <button className='btn btn-danger btn-sm' type='reset' onClick={() => navigate(-1)}>
            Annuler
          </button>
        </div>
      </div>
    </form>
  )
}

export default DocumentForm
