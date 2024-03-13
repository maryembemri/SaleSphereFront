import {useMemo} from 'react'
import CustomClientCard from './card/CustomClientCard'
import {ClientsListPagination} from '../components/pagination/ClientsListPagination'
import {useQueryResponseData, useQueryResponseLoading} from '../core/QueryResponseProvider'
import {Client} from '../../core/_models'
import {Loading} from '../../../../../_metronic/helpers'

const ClientsGrid = () => {
  const clients = useQueryResponseData()
  const isLoading = useQueryResponseLoading()
  const data = useMemo(() => clients, [clients])

  return (
    <div className='card-body '>
      <div className='py-8 row g-3 g-xl-6'>
        {data.length > 0 ? (
          data.map((item: Client, i) => {
            return <CustomClientCard key={i} client={item} />
          })
        ) : (
          <div className='d-flex text-center text-gray-600 fw-bold fs-6 w-100 align-content-center justify-content-center'>
            Aucun enregistrement correspondant n'a été trouvé
          </div>
        )}
      </div>
      <ClientsListPagination />

      {isLoading && <Loading />}
    </div>
  )
}

export default ClientsGrid
