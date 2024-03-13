import {FC} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {Fail, SVG, Success, toAbsoluteUrl} from '../../../../_metronic/helpers'
import Swal from 'sweetalert2'
import {Field, Form, Formik} from 'formik'
import {validationSchema} from './core/_init'

import {useQuery} from 'react-query'
import {useQueryResponse} from '../clients-list/core/QueryResponseProvider'
import {Client, ClientFormData} from '../core/_models'
import {createClient, getClientById, updateClient} from '../core/_requests'

type ClientFormProps = {
  clientForUpdate?: Client
}

const ClientForm: FC<ClientFormProps> = ({clientForUpdate}) => {
  const {refetch} = useQueryResponse()
  const navigate = useNavigate()

  const initialValues: ClientFormData = {
    // Simplify the assignment using optional chaining and nullish coalescing
    type: clientForUpdate?.type || 'professional',
    name: clientForUpdate?.name || '',
    taxNumber: clientForUpdate?.taxNumber || '',
    isExempt: clientForUpdate?.isExempt || false,
    exemptNumber: clientForUpdate?.exemptNumber || '',
    exemptExpiration: clientForUpdate?.exemptExpiration || '',
    register: clientForUpdate?.register || '',
    website: clientForUpdate?.website || '',
    email: clientForUpdate?.email || '',
    mobile: clientForUpdate?.mobile || '',
    phone: clientForUpdate?.phone || '',
    address: clientForUpdate?.address || '',
  }

  const onSubmit = async (values: ClientFormData) => {
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

      const formData: ClientFormData = {
        ...values,
      }

      try {
        if (clientForUpdate) {
          await updateClient(clientForUpdate.id, formData) // Implement this function to update the client
          Success.fire({
            title: 'Client mis à jour!',
            text: 'Client mis à jour avec succès',
          }).then(() => {
            refetch()
            navigate('/client/list')
          })
        } else {
          await createClient(formData)
          Success.fire({
            title: 'Client créé!',
            text: 'Client créé avec succès',
          }).then(() => {
            refetch()
            navigate('/client/list')
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
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
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
                  <label className='form-label'>Type de client</label>
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
                      <label className='form-check-label' htmlFor='type-client'>
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
                    placeholder='Raison Sociale / Nom du client'
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

              <div className='row mb-4'>
                <div className='col'>
                  <div className='form-check form-check-sm mt-4'>
                    <Field
                      className='form-check-input'
                      type='checkbox'
                      checked={values.isExempt}
                      name='isExempt'
                      id='exempt-checkbox'
                    />
                    <label className='form-check-label' htmlFor='exempt-checkbox'>
                      Client exonéré de TVA
                    </label>
                  </div>
                </div>
              </div>

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

                {values.isExempt && (
                  <div className='col-12 col-sm-4'>
                    <label className='form-label required'>Code d'exonération</label>
                    <Field
                      type='text'
                      name='exemptNumber'
                      className='form-control form-control-solid'
                      placeholder="Tapez le code d'exonération"
                    />
                    <div className='text-danger mt-2' />
                  </div>
                )}
                {values.isExempt && (
                  <div className='col-12 col-sm-4'>
                    <label className='form-label required'>Date d'expiration</label>
                    <Field
                      type='text'
                      name='exemptExpiration'
                      className='form-control form-control-solid'
                      placeholder="Tapez la date d'expiration du exonération"
                    />
                    <div className='text-danger mt-2' />
                  </div>
                )}
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

const ClientCreate: FC = () => {
  const {id} = useParams()
  console.log(id)
  const {data: clientData, isLoading: clientDataLoading} = useQuery(
    ['client', id], // Unique query key based on clientId
    () => getClientById(Number(id)), // Fetch client data based on clientId
    {
      enabled: !!id, // Enable query only when clientId is available
    }
  )

  if (clientDataLoading)
    return (
      <div className='d-flex justify-content-center align-items-center' style={{height: '75vh'}}>
        <div className='spinner-border text-primary' role='status'>
          <span className='visually-hidden'>Chargement...</span>
        </div>
      </div>
    )
  if (clientData) return <ClientForm clientForUpdate={clientData} />

  return <ClientForm />
}

export default ClientCreate
