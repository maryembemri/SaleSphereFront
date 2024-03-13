import {FC} from 'react'

import {Field, Form, Formik} from 'formik'
import {Fail, Success} from '../../../../../_metronic/helpers'
import clsx from 'clsx'
import {useListView} from '../users-list/core/ListViewProvider'

import {useQueryResponse} from '../users-list/core/QueryResponseProvider'
import Swal from 'sweetalert2'
import {User, UserFormData, initValues} from '../core/models'
import {createUser, updateUser} from '../core/requests'
import {validationSchema} from './core/init'

type Props = {
  isUserLoading: boolean
  user?: User
}

const UserEditModalForm: FC<Props> = ({user, isUserLoading}) => {
  const {setItemIdForUpdate} = useListView()
  const {refetch} = useQueryResponse()

  const premissions: string[] = [
    'achat',
    'vent',
    'client',
    'fournisseur',
    'produit',
    'caisse',
    'administration',
  ]

  const formValues: UserFormData = {
    name: user?.name || initValues.name,
    email: user?.email || initValues.email,
    position: user?.position || initValues.position,
    password: '',
    confirmPassword: '',
    permissions: user?.permissions || [],
  }

  const onSubmit = async (values: UserFormData) => {
    Swal.fire({
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
    }).then(async (result) => {
      if (result.isConfirmed) {
        console.log('Form submitted with values: ', values)

        try {
          if (user) {
            await updateUser(user.id, values)
            Success.fire({
              title: 'Utilisateur mis à jour!',
              text: 'Utilisateur mis à jour avec succès',
            }).then(() => {
              refetch()
            })
          } else {
            await createUser(values)
            Success.fire({
              title: 'Utilisateur créé!',
              text: 'Utilisateur créé avec succès',
            }).then(() => {
              refetch()
            })
          }
          setItemIdForUpdate(undefined)
        } catch (error: any) {
          console.log(error)
          Fail.fire({
            title: 'Error!',
            text: error.message,
          })
        }
      }
    })
  }

  const cancel = (withRefresh?: boolean) => {
    if (withRefresh) {
      refetch()
    }
    setItemIdForUpdate(undefined)
  }

  return (
    <Formik
      id='modal_add_user_form'
      initialValues={formValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({touched, errors, isValid, values}) => (
        <Form>
          <div className='d-flex flex-column scroll-y px-6'>
            <div className='row mb-7'>
              <label className='required fw-bold fs-6 mb-2'>Nom</label>
              <Field
                placeholder='Nom du utilisateur'
                type='text'
                name='name'
                className={clsx(
                  'form-control form-control-solid mb-3 mb-lg-0',
                  {'is-invalid': touched.name && errors.name},
                  {
                    'is-valid': touched.name && !errors.name,
                  }
                )}
                autoComplete='off'
                disabled={isUserLoading}
              />
              {touched.name && errors.name && (
                <div className='fv-plugins-message-container'>
                  <div className='fv-help-block'>
                    <span role='alert'>{errors.name}</span>
                  </div>
                </div>
              )}
            </div>

            <div className='row mb-7'>
              <label className='required fw-bold fs-6 mb-2'>Email</label>
              <Field
                placeholder='Email'
                className={clsx(
                  'form-control form-control-solid mx-2 mb-3 mb-lg-0',
                  {'is-invalid': touched.email && errors.email},
                  {
                    'is-valid': touched.email && !errors.email,
                  }
                )}
                type='email'
                name='email'
                autoComplete='off'
                disabled={isUserLoading}
              />

              {touched.email && errors.email && (
                <div className='fv-plugins-message-container'>
                  <div className='fv-help-block'>
                    <span role='alert'>{errors.email}</span>
                  </div>
                </div>
              )}
            </div>
            {!user && (
              <div className='row mb-7'>
                <div className='col ps-1'>
                  <label className='required fw-bold fs-6 mb-2'>Mot de passe</label>
                  <Field
                    placeholder='Mot de passe'
                    className={clsx(
                      'form-control form-control-solid mb-3 mb-lg-0',
                      {'is-invalid': touched.password && errors.password},
                      {
                        'is-valid': touched.password && !errors.password,
                      }
                    )}
                    type='password'
                    name='password'
                    autoComplete='off'
                    disabled={isUserLoading}
                  />
                  {touched.password && errors.password && (
                    <div className='fv-plugins-message-container'>
                      <div className='fv-help-block'>
                        <span role='alert'>{errors.password}</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className='col pe-1'>
                  <label className='required fw-bold fs-6 mb-2'>Confirmer mot de passe</label>
                  <Field
                    placeholder='Confirm Mot de passe'
                    className={clsx(
                      'form-control form-control-solid mb-3 mb-lg-0',
                      {'is-invalid': touched.confirmPassword && errors.confirmPassword},
                      {
                        'is-valid': touched.confirmPassword && !errors.confirmPassword,
                      }
                    )}
                    type='password'
                    name='confirmPassword'
                    autoComplete='off'
                    disabled={isUserLoading}
                  />
                  {touched.confirmPassword && errors.confirmPassword && (
                    <div className='fv-plugins-message-container'>
                      <div className='fv-help-block'>
                        <span role='alert'>{errors.confirmPassword}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
            <div className='row mb-7'>
              <label className='required fw-bold fs-6 mb-2'>Position</label>
              <Field
                placeholder='Position de utilisateur'
                className={clsx(
                  'form-control form-control-solid mb-3 mb-lg-0',
                  {'is-invalid': touched.position && errors.position},
                  {
                    'is-valid': touched.position && !errors.position,
                  }
                )}
                type='text'
                name='position'
                autoComplete='off'
                disabled={isUserLoading}
              />
              {touched.position && errors.position && (
                <div className='fv-plugins-message-container'>
                  <div className='fv-help-block'>
                    <span role='alert'>{errors.position}</span>
                  </div>
                </div>
              )}
            </div>
            <div className='row mb-7'>
              <label htmlFor='' className='form-label mb-3'>
                Permissions
              </label>
              {premissions.map((permission, index) => (
                <div key={index} className='col-4 mb-4'>
                  <label className='form-check form-check-custom form-check-solid me-9'>
                    <Field
                      className='form-check-input form-check-input-sm'
                      type='checkbox'
                      value={permission}
                      name='permissions'
                      id={permission}
                      checked={values.permissions.includes(permission)} // Check if permission is in the user's permissions
                    />
                    <span className='form-check-label'>{permission}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className='text-center pt-15'>
            <button
              type='reset'
              onClick={() => cancel()}
              className='btn btn-sm btn-light me-3'
              data-users-modal-action='cancel'
              disabled={isUserLoading}
            >
              Annuler
            </button>

            <button
              type='submit'
              className='btn btn-sm btn-primary'
              data-users-modal-action='submit'
              disabled={isUserLoading || !isValid}
            >
              <span className='indicator-label'>Soumettre</span>
              {isUserLoading && (
                <span className='indicator-progress'>
                  Veuillez patienter...{' '}
                  <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                </span>
              )}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export {UserEditModalForm}
