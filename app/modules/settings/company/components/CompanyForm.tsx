import {FC} from 'react'
import {Company} from '../_model'
import {Field, Form, Formik} from 'formik'
import {updateCompany} from '../core/requests'

interface Props {
  company: Company
  onRefetch: () => void
  setForm: any
}

const CompanyForm: FC<Props> = ({company, onRefetch, setForm}) => {
  const handleSubmit = async (values: Company) => {
    console.log(values)
    await updateCompany(values.id, values)
    onRefetch()
    setForm(false)
  }

  return (
    <Formik initialValues={company} onSubmit={handleSubmit}>
      {() => (
        <Form>
          <div className='card-body pb-0 pt-5'>
            <div className='w-100 text-center'>
              <div className='row mb-10'>
                <div className='col'>
                  <label className='form-label required'>Nom de l'entreprise</label>
                  <Field
                    name='name'
                    className='form-control form-control-lg form-control-solid text-center'
                  />
                  <div className='text-danger mt-2' />
                </div>
                <div className='col'>
                  <label className='form-label required'>Matricule Fiscale</label>
                  <Field
                    name='taxId'
                    className='form-control form-control-lg form-control-solid text-center'
                  />
                  <div className='text-danger mt-2' />
                </div>

                <div className='col'>
                  <label className='form-label required'>Devise</label>
                  <Field
                    disabled
                    name='currency'
                    className='text-gray-400 form-control form-control-lg form-control-solid text-center'
                  />
                  <div className='text-danger mt-2' />
                </div>
              </div>
            </div>
          </div>

          <div className='card-body py-0'>
            <div className='row mb-10'>
              <div className='col'>
                <label className='form-label required'>Email</label>
                <Field
                  type='email'
                  name='email'
                  className='form-control form-control-lg form-control-solid'
                />
                <div className='text-danger mt-2' />
              </div>

              <div className='col'>
                <label className='form-label required'>N° Mobile</label>
                <div className='input-group input-group-lg input-group-solid'>
                  <span className='input-group-text'>+216</span>
                  <Field
                    name='mobile'
                    className='form-control form-control-lg form-control-solid'
                  />
                </div>
                <div className='text-danger mt-2' />
              </div>
              <div className='col'>
                <label className='form-label required'>Telephone</label>
                <div className='input-group input-group-lg input-group-solid'>
                  <span className='input-group-text'>+216</span>
                  <Field name='phone' className='form-control form-control-lg form-control-solid' />
                </div>

                <div className='text-danger mt-2' />
              </div>

              <div className='col'>
                <label className='form-label'>Adresse</label>
                <Field
                  name='address'
                  as='textarea'
                  className='form-control form-control-lg form-control-solid'
                  rows={3}
                />
              </div>
            </div>
            {/* dd */}
          </div>

          <div className='card-footer '>
            <button type='submit' className='btn btn-sm btn-primary me-2'>
              Enregsiter
            </button>
            <button type='reset' onClick={() => setForm(false)} className='btn btn-sm btn-danger'>
              Annuler
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default CompanyForm
