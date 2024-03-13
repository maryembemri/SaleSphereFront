import {useEffect, useState} from 'react'
import {MenuComponent} from '../../../../../../_metronic/assets/ts/components'

import {Icon, getAllCategories} from '../../../../../../_metronic/helpers'

import {useQuery} from 'react-query'
import {initialQueryState, useQueryRequest} from '../../core/QueryRequestProvider'
import {useQueryResponse} from '../../core/QueryResponseProvider'

const ProductsListFilter = () => {
  const {updateState} = useQueryRequest()
  const {isLoading} = useQueryResponse()

  const [category, setCategory] = useState<string | undefined>()

  const {data: categories, isLoading: categoriesLoading} = useQuery('categories', getAllCategories)

  useEffect(() => {
    MenuComponent.reinitialization()
  }, [])

  const resetData = () => {
    updateState({filter: undefined, ...initialQueryState})
  }

  const filterData = () => {
    updateState({
      filter: {category},
      ...initialQueryState,
    })
  }

  return (
    <>
      {/* begin::Filtre Button */}
      <button
        disabled={isLoading || categoriesLoading}
        type='button'
        className='btn btn-sm btn-light-primary me-3'
        data-menu-trigger='click'
        data-menu-placement='bottom-end'
      >
        <Icon iconName='filter' className='fs-2' />
        Filtre
      </button>
      {/* end::Filtre Button */}
      {/* begin::SubMenu */}
      <div
        className='menu menu-sub menu-sub-dropdown w-300px w-md-325px'
        style={{transform: 'translate3d(-46.4px, 342.4px, 0px)'}}
        data-menu='true'
      >
        {/* begin::Header */}
        <div className='px-7 py-3'>
          <div className='fs-5 text-dark fw-bolder'>Filtre Options</div>
        </div>
        {/* end::Header */}

        {/* begin::Separator */}
        <div className='separator border-gray-200'></div>
        {/* end::Separator */}

        {/* begin::Content */}
        <div className='px-7 py-5' data-product-table-filter='form'>
          {/* begin::Input group */}
          <div className='mb-5'>
            <label className='form-label'>Categorie</label>
            <select
              className='form-select form-select-sm fw-bolder'
              data-select2='true'
              data-placeholder='Select option'
              data-allow-clear='true'
              data-product-table-filter='category'
              data-hide-search='true'
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            >
              <option value=''>Tout</option>
              {categories &&
                categories.map((category) => <option value={category.id}>{category.name}</option>)}
            </select>
          </div>
          {/* end::Input group */}

          {/* begin::Actions */}
          <div className='d-flex justify-content-end'>
            <button
              type='button'
              disabled={isLoading || categoriesLoading}
              onClick={resetData}
              className='btn btn-sm btn-light btn-active-light-primary fw-bold me-2 px-6'
              data-menu-dismiss='true'
              data-product-table-filter='filter'
            >
              Reseter
            </button>
            <button
              disabled={isLoading || categoriesLoading}
              type='button'
              onClick={filterData}
              className='btn btn-sm btn-primary fw-bold px-6'
              data-menu-dismiss='true'
              data-product-table-filter='reset'
            >
              Appliquer
            </button>
          </div>
          {/* end::Actions */}
        </div>
        {/* end::Content */}
      </div>
      {/* end::SubMenu */}
    </>
  )
}

export {ProductsListFilter}
