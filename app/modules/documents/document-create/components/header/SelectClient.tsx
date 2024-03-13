import Select from 'react-select'
import {useDocumentView} from '../../core/DocumentViewProvider'
import {useDocumentContext} from '../../core/DocumentFormProvider'
import {useState} from 'react'
import {useQuery} from 'react-query'
import ClientDetails from './ClientDetails'
import SupplierDetails from './SupplierDetails'
import {Client, getAllClients} from '../../../../client'
import {getAllSuppliers} from '../../../../supplier/core/requests'
import {Supplier} from '../../../../supplier/core/models'

type SelectOption = {
  value: number
  label?: string
}

const SelectClient = () => {
  const {type} = useDocumentView()
  const {formData, setFormData} = useDocumentContext()

  const {data: clients, isLoading: clientsLoading} = useQuery('all-clients', getAllClients, {
    enabled: !!(type === 'sales'),
  })
  const [selectedClient, setSelectedClient] = useState<SelectOption | null>(null)
  const clientOptions: SelectOption[] =
    clients?.map((client: Client) => ({
      value: client.id,
      label: client.name,
    })) || []

  const {data: suppliers, isLoading: suppliersLoading} = useQuery(
    'all-suppliers',
    getAllSuppliers,
    {
      enabled: !!(type === 'purchases'),
    }
  )
  const [selectedSupplier, setSelectedSupplier] = useState<SelectOption | null>(null)
  const supplierOptions: SelectOption[] =
    suppliers?.map((supplier: Supplier) => ({
      value: supplier.id,
      label: supplier.name,
    })) || []

  const handleSelectChange = (selectedOption: SelectOption | null) => {
    if (type === 'sales') {
      setSelectedClient(selectedOption)
      setFormData({
        ...formData,
        client: clients?.find((client: Client) => client.id === selectedOption?.value),
      })
    }
    if (type === 'purchases') {
      console.log(formData)
      setSelectedSupplier(selectedOption)
      setFormData({
        ...formData,
        supplier: suppliers?.find((supplier: Supplier) => supplier.id === selectedOption?.value),
      })
    }
  }

  const handleReset = () => {
    setSelectedClient(null)
    setSelectedSupplier(null)
    setFormData({...formData, client: undefined, supplier: undefined})
  }

  if (type === 'purchases') {
    return (
      <div>
        {formData.supplier ? (
          <>
            <h2 className='fw-bold fs-2'>
              Fournisseur
              <span
                onClick={handleReset}
                className='fw-semibold text-gray-600 me-2 fs-5 ms-2 text-hover-primary cursor-pointer'
              >
                Modifier
              </span>
            </h2>
            <hr className='h-4px opacity-100 bg-gray-300 border-0' />
            <SupplierDetails supplier={formData.supplier} />
          </>
        ) : (
          <>
            <h2 className='fw-bold fs-2'>Fournisseur</h2>
            <hr className='h-4px opacity-100 bg-gray-300 border-0' />
            <Select
              name='client'
              className='basic-single'
              classNamePrefix='select'
              isLoading={suppliersLoading}
              isClearable={true}
              isSearchable={true}
              placeholder='Sélectionnez un fournisseur'
              options={supplierOptions}
              value={selectedSupplier}
              onChange={handleSelectChange}
            />
          </>
        )}
      </div>
    )
  }

  return (
    <div>
      {formData.client ? (
        <>
          <h2 className='fw-bold fs-2'>
            Client
            <span
              onClick={handleReset}
              className='fw-semibold text-gray-600 me-2 fs-5 ms-2 text-hover-primary cursor-pointer'
            >
              Modifier
            </span>
          </h2>
          <hr className='h-4px opacity-100 bg-gray-300 border-0' />
          <ClientDetails client={formData.client} />
        </>
      ) : (
        <>
          <h2 className='fw-bold fs-2'>Client</h2>

          <hr className='h-4px opacity-100 bg-gray-300 border-0' />
          <Select
            name='client'
            className='basic-single'
            classNamePrefix='select'
            isLoading={clientsLoading}
            isClearable={true}
            isSearchable={true}
            placeholder='Sélectionnez un client'
            options={clientOptions}
            value={selectedClient}
            onChange={handleSelectChange}
          />
        </>
      )}
    </div>
  )
}

export default SelectClient
