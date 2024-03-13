import {useEffect, useState} from 'react'
import {MenuComponent} from '../../../../../../_metronic/assets/ts/components'
import {Icon} from '../../../../../../_metronic/helpers'
import {initialQueryState} from '../../core/_init'
import {useQueryRequest} from '../../core/QueryRequestProvider'
import {useQueryResponse} from '../../core/QueryResponseProvider'

const SuppliersListFilter = () => {
  const {updateState} = useQueryRequest()
  const {isLoading} = useQueryResponse()

  // const [isExempt, setExempt] = useState<boolean | undefined>(undefined)
  // const handleExemptChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = event.target.checked
  //   setExempt(value ? true : undefined)
  // }

  const [type, setType] = useState<'individual' | 'professional' | undefined>()
  const handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedType = event.target.value as 'individual' | 'professional'
    setType(selectedType)
  }

  useEffect(() => {
    MenuComponent.reinitialization()
  }, [])

  const resetData = () => {
    // setExempt(undefined)
    setType(undefined)
    updateState({filter: undefined, ...initialQueryState})
  }

  const filterData = () => {
    updateState({
      filter: {type},
      ...initialQueryState,
    })
  }

  return (
    <>
      <button
        disabled={isLoading}
        type='button'
        className='btn btn-sm btn-light-primary me-3'
        data-menu-trigger='click'
        data-menu-placement='bottom-end'
      >
        <Icon iconName='filter' className='fs-2' />
        Filtre
      </button>

      <div
        className='menu menu-sub menu-sub-dropdown w-300px w-md-325px'
        style={{transform: 'translate3d(-46.4px, 342.4px, 0px)'}}
        data-menu='true'
      >
        <div className='px-7 py-3'>
          <div className='fs-5 text-dark fw-bolder'>Options de filtrage</div>
        </div>

        <div className='separator border-gray-200'></div>

        <div className='px-7 py-5' data-supplier-table-filter='form'>
          <div className='mb-10'>
            <label className='form-label fw-bold'>Type de fournisseur:</label>
            <div className='d-flex'>
              <label className='form-check form-check-sm form-check-custom form-check-solid me-5'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  value=''
                  checked={!type}
                  onChange={handleTypeChange}
                />
                <span className='form-check-label'>Tout</span>
              </label>
              <label className='form-check form-check-sm form-check-custom form-check-solid me-5'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  value='individual'
                  checked={type === 'individual'}
                  onChange={handleTypeChange}
                />
                <span className='form-check-label'>Individuel</span>
              </label>
              <label className='form-check form-check-sm form-check-custom form-check-solid'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  value='professional'
                  checked={type === 'professional'}
                  onChange={handleTypeChange}
                />
                <span className='form-check-label'>Professionnel</span>
              </label>
            </div>
          </div>

          {/* <div className='mb-10'>
            <div className='form-check form-switch form-switch-sm form-check-custom form-check-solid'>
              <input
                className='form-check-input'
                type='checkbox'
                name='isExempt'
                onChange={handleExemptChange}
                checked={isExempt}
              />
              <label className='form-check-label'>Exonéré</label>
            </div>
          </div> */}

          <div className='d-flex justify-content-end'>
            <button
              type='button'
              disabled={isLoading}
              onClick={resetData}
              className='btn btn-sm btn-light btn-active-light-primary fw-bold me-2 px-6'
              data-menu-dismiss='true'
              data-supplier-table-filter='filter'
            >
              Reseter
            </button>
            <button
              disabled={isLoading}
              type='button'
              onClick={filterData}
              className='btn btn-sm btn-primary fw-bold px-6'
              data-menu-dismiss='true'
              data-supplier-table-filter='reset'
            >
              Appliquer
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export {SuppliersListFilter}
