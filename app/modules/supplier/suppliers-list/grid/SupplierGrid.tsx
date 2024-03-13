import {useMemo} from 'react'
import CustomSupplierCard from './card/CustomSupplierCard'
import {SuppliersListPagination} from '../components/pagination/SuppliersListPagination'
import {useQueryResponseData, useQueryResponseLoading} from '../core/QueryResponseProvider'
import {Supplier} from '../../core/models'
import {Loading} from '../../../../../_metronic/helpers'

const SuppliersGrid = () => {
  const suppliers = useQueryResponseData()
  const isLoading = useQueryResponseLoading()
  const data = useMemo(() => suppliers, [suppliers])

  return (
    <div className='card-body '>
      <div className='py-8 row g-3 g-xl-6'>
        {data.length > 0 ? (
          data.map((item: Supplier, i) => {
            return <CustomSupplierCard key={i} supplier={item} />
          })
        ) : (
          <div className='d-flex text-center text-gray-600 fw-bold fs-6 w-100 align-content-center justify-content-center'>
            Aucun enregistrement correspondant n'a été trouvé
          </div>
        )}
      </div>
      <SuppliersListPagination />

      {isLoading && <Loading />}
    </div>
  )
}

export default SuppliersGrid
