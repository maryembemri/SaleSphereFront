import {Icon} from '../../../../../_metronic/helpers'

const CreateColorModal = () => {
  return (
    <div className='modal fade' id='modal_create_color' aria-hidden='true'>
      <div className='modal-dialog modal-md'>
        <div className='modal-content rounded'>
          <div className='modal-header justify-content-between border-0 pb-0'>
            <div className='model-title'>
              <h2>Ajouter un couleur</h2>
            </div>
            <div className='btn btn-sm btn-icon btn-active-color-primary' data-bs-dismiss='modal'>
              <Icon iconName='cross' className='fs-1' />
            </div>
          </div>

          <form>
            <div className='modal-body'>
              <div className='mb-7'>
                <label className='required fw-bold fs-6 mb-2'>Label</label>
                <input
                  placeholder='Couleur'
                  name='label'
                  type='text'
                  className='form-control form-control-solid mb-3 mb-lg-0'
                  value=''
                />
                <div className='fv-plugins-message-container'></div>
              </div>
              <div className='mb-7'>
                <label className='required fw-bold fs-6 mb-2'>Hex code</label>
                <input
                  placeholder='#FFFFFF'
                  name='hexCpde'
                  type='text'
                  className='form-control form-control-solid mb-3 mb-lg-0'
                  value=''
                />
                <div className='fv-plugins-message-container'></div>
              </div>
              <div className='mt-10 text-end'>
                <button type='submit' className='btn btn-sm btn-primary me-3'>
                  Enregistrer
                </button>
                <button
                  type='reset'
                  className='btn btn-sm btn-danger'
                  data-bs-toggle='modal'
                  data-bs-target='#modal_create_color'
                >
                  Annuler
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateColorModal
