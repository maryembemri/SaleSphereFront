import {FC} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {Fail, SVG, Success, toAbsoluteUrl} from '../../../../_metronic/helpers'
import Swal from 'sweetalert2'
import {Field, Form, Formik} from 'formik'
import {validationSchema} from './core/_init'

import {useQuery} from 'react-query'
import {useQueryResponse} from '../suppliers-list/core/QueryResponseProvider'
import {Supplier, SupplierFormData} from '../core/models'
import {createSupplier, getSupplierById, updateSupplier} from '../core/requests'

type SupplierFormProps = {
  supplierForUpdate?: Supplier
}

const SupplierForm: FC<SupplierFormProps> = ({supplierForUpdate}) => {
  const {refetch} = useQueryResponse()
  const navigate = useNavigate()

  const initialValues: SupplierFormData = {
    // Simplify the assignment using optional chaining and nullish coalescing
    type: supplierForUpdate?.type || 'professional',
    name: supplierForUpdate?.name || '',
    taxNumber: supplierForUpdate?.taxNumber || '',
    register: supplierForUpdate?.register || '',
    website: supplierForUpdate?.website || '',
    email: supplierForUpdate?.email || '',
    mobile: supplierForUpdate?.mobile || '',
    phone: supplierForUpdate?.phone || '',
    address: supplierForUpdate?.address || '',
  }

  const onSubmit = async (values: SupplierFormData) => {
    const confirmResult = await Swal.fire({
      title: 'Êtes-vous sûr ?',
      text: "Veuillez vérifier les détails suivants pour vous assurer qu'ils sont corrects avant de poursuivre.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, confirmer',
      cancelButtonText: 'Non, annulez !',
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    })

    if (confirmResult.isConfirmed) {
      console.log('Form submitted with values: ', values)

      const formData: SupplierFormData = {
        ...values,
      }

      try {
        if (supplierForUpdate) {
          await updateSupplier(supplierForUpdate.id, formData) // Implement this function to update the supplier
          Success.fire({
            title: 'Supplier mis à jour!',
            text: 'Supplier mis à jour avec succès',
          }).then(() => {
            refetch()
            navigate('/suppliers/list')
          })
        } else {
          await createSupplier(formData)
          Success.fire({
            title: 'Supplier créé!',
            text: 'Supplier créé avec succès',
          }).then(() => {
            refetch()
            navigate('/suppliers/list')
          })
        }
      } catch (error: any) {
        console.error(error)
        Fail.fire({
          title: 'Error!',
          text: error.message,
        })
      }
    }
  }

  const handleGoBack = () => {
    navigate(-1) // Navigate back to the previous page
  }

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({values, touched, errors}) => (
        <Form>
          <div className='card'>
            <div className='card-header'>
              <div className='card-title'>
                <h2>Informations</h2>
              </div>
            </div>
            <div className='card-body px-15'>
              {/* <!-- Field 1 --> */}

              <div className='row'>
                <div className='col-12'>
                  <label className='form-label'>Type de fournisseur</label>
                  <div className='form-control border-0 d-flex'>
                    <div className='form-check form-check-sm me-3'>
                      <Field
                        className='form-check-input'
                        type='radio'
                        name='type'
                        id='type-professional'
                        value='professional'
                      />
                      <label className='form-check-label' htmlFor='type-service'>
                        <SVG
                          path={toAbsoluteUrl('/media/icons/duotune/general/gen002.svg')}
                          className='svg-icon svg-icon-2 me-1'
                        />
                        Professionnel
                      </label>
                    </div>
                    <div className='form-check form-check-sm'>
                      <Field
                        className='form-check-input'
                        type='radio'
                        name='type'
                        id='type-individual'
                        value='individual'
                      />
                      <label className='form-check-label' htmlFor='type-supplier'>
                        <SVG
                          path={toAbsoluteUrl('/media/icons/duotune/communication/com013.svg')}
                          className='svg-icon svg-icon-2 me-1'
                        />
                        Individuel
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Fields 5, 6, and 7 --> */}

              <div className='row'>
                <div className='col-12 col-sm-3'>
                  <label className='form-label required'>Raison Sociale / Nom</label>
                  <Field
                    type='text'
                    name='name'
                    className='form-control form-control-solid'
                    placeholder='Raison Sociale / Nom du supplier'
                  />
                  {touched.name && errors.name && <div className='text-danger'>{errors.name}</div>}
                </div>
                <div className='col-12 col-sm-3'>
                  <label className='form-label'>Email</label>
                  <Field
                    type='email'
                    name='email'
                    className='form-control form-control-solid'
                    placeholder='email@exemple.com'
                  />
                  {touched.email && errors.email && (
                    <div className='text-danger'>{errors.email}</div>
                  )}
                </div>
                <div className='col-12 col-sm-3'>
                  <label className='form-label'>Registre de commerce</label>
                  <Field
                    type='text'
                    name='register'
                    className='form-control form-control-solid'
                    placeholder='Tapez registre de commerce'
                  />
                  {touched.register && errors.register && (
                    <div className='text-danger'>{errors.register}</div>
                  )}
                </div>
                <div className='col-12 col-sm-3'>
                  <label className='form-label'>Site Web</label>
                  <Field
                    type='text'
                    name='website'
                    className='form-control form-control-solid'
                    placeholder='www.exemple.com'
                  />
                  {touched.website && errors.website && (
                    <div className='text-danger'>{errors.website}</div>
                  )}
                </div>
              </div>

              {/* <!-- Fields 2, 3, and 4 --> */}

              <div className='row'>
                <div className='col-12 col-sm-4'>
                  <label className='form-label required'>Matricule Fiscale</label>
                  <Field
                    type='text'
                    name='taxNumber'
                    className='form-control form-control-solid'
                    placeholder='Tapez identifient unique'
                  />
                  {touched.taxNumber && errors.taxNumber && (
                    <div className='text-danger'>{errors.taxNumber}</div>
                  )}
                </div>
              </div>

              <div className='row'>
                <div className='col-12 col-sm-4'>
                  <label className='form-label required'>Numéro mobile</label>
                  <div className='input-group input-group-solid'>
                    <span className='input-group-text'>+216</span>
                    <Field
                      type='number'
                      name='mobile'
                      className='form-control form-control-solid'
                    />
                  </div>
                  {touched.mobile && errors.mobile && (
                    <div className='text-danger'>{errors.mobile}</div>
                  )}
                </div>
                <div className='col-12 col-sm-4'>
                  <label className='form-label'>Numéro de téléphone</label>
                  <div className='input-group input-group-solid'>
                    <span className='input-group-text'>+216</span>
                    <Field type='number' name='phone' className='form-control form-control-solid' />
                  </div>
                  {touched.phone && errors.phone && (
                    <div className='text-danger'>{errors.phone}</div>
                  )}
                </div>
                <div className='col-12 col-sm-4'>
                  <label className='form-label'>Adresse</label>
                  <div className='input-group input-group-solid'>
                    <Field
                      type='text'
                      name='address'
                      className='form-control form-control form-control-solid'
                    />
                    <span className='input-group-text'>TN</span>
                  </div>
                  {touched.address && errors.address && (
                    <div className='text-danger'>{errors.address}</div>
                  )}
                </div>
              </div>
            </div>
            <div className='card-footer text-end'>
              <button type='submit' className='btn btn-sm btn-primary me-3'>
                Enregistrer
              </button>
              <button type='reset' className='btn btn-sm btn-danger' onClick={handleGoBack}>
                Annuler
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  )
}

const SupplierCreate: FC = () => {
  const {id} = useParams()

  const {data: supplierData, isLoading: supplierDataLoading} = useQuery(
    ['supplier', id], // Unique query key based on supplierId
    () => getSupplierById(Number(id)), // Fetch supplier data based on supplierId
    {
      enabled: !!id, // Enable query only when supplierId is available
    }
  )

  if (supplierDataLoading)
    return (
      <div className='d-flex justify-content-center align-items-center' style={{height: '75vh'}}>
        <div className='spinner-border text-primary' role='status'>
          <span className='visually-hidden'>Chargement...</span>
        </div>
      </div>
    )
  if (supplierData) return <SupplierForm supplierForUpdate={supplierData} />

  return <SupplierForm />
}

export default SupplierCreate
