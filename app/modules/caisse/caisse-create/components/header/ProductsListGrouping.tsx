import {Icon} from '../../../../../../_metronic/helpers'
import {useListView} from '../../core/ListViewProvider'

const ProductsListGrouping = () => {
  const {selected, clearSelected} = useListView()

  return (
    <div className='d-flex justify-content-end align-items-center me-3'>
      <div className='fw-bolder me-5'>
        <span className='me-2'>{selected.length}</span> Selectionnés
      </div>

      <button
        type='button'
        className='btn btn-sm btn-light-primary ps-2'
        disabled={!selected.length}
        onClick={clearSelected}
      >
        <Icon iconName='cross' className='fs-2' />
        Clear
      </button>
    </div>
  )
}

export {ProductsListGrouping}
